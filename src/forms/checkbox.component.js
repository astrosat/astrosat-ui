import React from 'react';

import styles from './checkbox.module.css';

const Checkbox = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked,
  ariaLabel
}) => (
  <label
    className={`${styles.checkbox} ${checked ? styles.active : ''}  ${
      disabled ? styles.disabled : ''
    }`}
  >
    <input
      type="checkbox"
      name={name}
      value={value ? value : name}
      disabled={disabled}
      onChange={() => (!disabled ? onChange(value) : null)}
      checked={checked}
      aria-label={ariaLabel}
    />
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default Checkbox;
