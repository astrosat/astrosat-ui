import React from 'react';
import clsx from 'clsx';

import styles from './checkbox.module.css';

const Checkbox = (
  {
    id,
    name,
    value,
    label,
    onChange,
    disabled = false,
    checked,
    ariaLabel,
    defaultChecked,
    className,
    style
  },
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
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      checked={checked}
      aria-label={ariaLabel}
      defaultChecked={defaultChecked}
    />
    <label className={styles.label} htmlFor={`${id}-checkbox`}>
      {label}
    </label>
  </div>
);

export default React.forwardRef(Checkbox);
