import React from 'react';

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
    defaultChecked
  },
  ref
) => (
  <label
    className={`${styles.checkbox} ${checked ? styles.active : ''}  ${
      disabled ? styles.disabled : ''
    }`}
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
