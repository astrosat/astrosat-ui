import React from 'react';
import clsx from 'clsx';

import styles from './checkbox.module.css';

const Checkbox = (
  { id, label, disabled = false, ariaLabel, className, style, ...rest },
  ref
) => (
  <div
    className={clsx(
      styles.checkbox,
      {
        [styles.disabled]: disabled
      },
      className
    )}
    style={style}
  >
    <input
      id={`${id}-checkbox`}
      className={styles.input}
      ref={ref}
      type="checkbox"
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    />
    <label className={styles.label} htmlFor={`${id}-checkbox`}>
      {label}
    </label>
  </div>
);

export default React.forwardRef(Checkbox);
