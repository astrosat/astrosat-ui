import React from 'react';

import styles from './radio.module.css';

const Radio = ({
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
    className={`${styles.radio} ${defaultChecked ? styles.active : ''} ${
      checked ? styles.active : ''
    } ${disabled ? styles.disabled : ''}`}
  >
    <input
      type="radio"
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

export default Radio;
