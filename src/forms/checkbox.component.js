import React from 'react';

import styles from './checkbox.module.css';

const Checkbox = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked
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
      onChange={() => onChange(value)}
      checked={checked}
    />
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default Checkbox;
