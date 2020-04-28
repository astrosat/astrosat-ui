import React from 'react';

import styles from './checkbox.module.css';

const Checkbox = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked,
  ariaLabel,
  defaultChecked
}) => (
  <label
    className={`${styles.checkbox} ${checked ? styles.active : ''}  ${
      disabled ? styles.disabled : ''
    }`}
  >
    <input
      type="checkbox"
      name={name}
      value={value}
      disabled={disabled}
      onChange={event => (!disabled ? onChange(event) : null)}
      checked={checked}
      aria-label={ariaLabel}
      defaultChecked={defaultChecked}
    />
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default Checkbox;
