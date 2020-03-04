import React from 'react';

import styles from './checkbox.module.css';

const Checkbox = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked,
  defaultChecked = false,
  ariaLabel
}) => (
  <label
    className={`${styles.checkbox} ${defaultChecked ? styles.active : ''} ${
      checked ? styles.active : ''
    } ${disabled ? styles.disabled : ''}`}
  >
    <input
      type="checkbox"
      name={name}
      value={value ? value : name}
      disabled={disabled}
      onChange={event => (!disabled ? onChange(event) : null)}
      checked={checked}
      defaultChecked={defaultChecked}
      aria-label={ariaLabel}
    />
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default Checkbox;
