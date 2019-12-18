import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './slider.module.css';
import { scaleIdentity } from 'd3-scale';

const Slider = ({
  min,
  max,
  values,
  scale = scaleIdentity([min, max]),
  onChange,
  format = scale.tickFormat(5),
  tickCount = 10,
  majorTickEvery = 2,
  ...props
}) => {
  min = scale.domain()[0];
  max = scale.domain()[1];
  const scaledMin = scale(min),
    scaledMax = scale(max),
    scaledValues = values.map(scale);

  const ticks = scale.ticks(tickCount);

  const toPercent = val =>
    (100 * (scale(val) - scale.range()[0])) /
    (scale.range()[1] - scale.range()[0]);

  return (
    <Range
      min={scaledMin}
      max={scaledMax}
      values={scaledValues}
      onChange={values => onChange(values.map(scale.invert))}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={props.style}
          className={styles.track}
        >
          <div
            className={styles.trackBackground}
            ref={props.ref}
            style={{
              background:
                values.length > 1
                  ? getTrackBackground({
                      values: scaledValues,
                      colors: [
                        '#eee',
                        'var(--primary-background-color)',
                        '#eee'
                      ],
                      min: scaledMin,
                      max: scaledMax
                    })
                  : '#eee'
            }}
          >
            {children}
          </div>
          <div className={styles.axis}>
            {ticks.map((val, idx) => (
              <div
                key={idx}
                className={styles.tick}
                style={{ left: toPercent(val) + '%' }}
              >
                <div
                  className={`${styles.tickWrapper} ${idx % majorTickEvery ===
                    0 && styles.major}`}
                >
                  <span className={styles.line}></span>
                  {idx % majorTickEvery === 0 && (
                    <span className={styles.text}>{format(val)}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => (
        <div
          {...props}
          className={`${styles.thumb} ${isDragged && styles.dragged}`}
        >
          <div className={styles.thumbValue}>{format(values[index])}</div>
        </div>
      )}
      {...props}
    />
  );
};

export default Slider;
