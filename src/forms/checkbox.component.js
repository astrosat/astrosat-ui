import React from 'react';
import clsx from 'clsx';

import styles from './checkbox.module.css';

const Checkbox = (
  {
    name,
    value,
    label,
    onChange,
    disabled = false,
    checked,
    ariaLabel,
    defaultChecked,
    className
  },
  ref
) => (
  <label
    className={clsx(
      styles.checkbox,
      {
        [styles.active]: checked,
        [styles.disabled]: disabled
      },
      className
    )}
  >
    <input
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
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default React.forwardRef(Checkbox);
