import React from 'react';

import styles from './radio.module.css';

const Radio = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked,
  ariaLabel
}) => (
  <label
    className={`${styles.radio} ${checked ? styles.active : ''}  ${
      disabled ? styles.disabled : ''
    }`}
  >
    <input
      type="radio"
      name={name}
      value={value ? value : name}
      disabled={disabled}
      onChange={event => (!disabled ? onChange(event) : null)}
      checked={checked}
      aria-label={ariaLabel}
    />
    <span className={styles.checkmark} />
    {label}
  </label>
);

export default Radio;
