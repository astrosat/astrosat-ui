import React, { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './radio.module.css';

const Radio = (
  { id, value, label, disabled = false, ariaLabel, className, style, ...rest },
  ref
) => (
  <div
    className={clsx(
      styles.radio,
      {
        [styles.disabled]: disabled
      },
      className
    )}
    style={style}
  >
    <input
      id={`${id}-${value}-radio`}
      className={styles.input}
      ref={ref}
      type="radio"
      disabled={disabled}
      aria-label={ariaLabel}
      value={value}
      {...rest}
    />
    <label className={styles.label} htmlFor={`${id}-${value}-radio`}>
      {label}
    </label>
  </div>
);

export default forwardRef(Radio);
