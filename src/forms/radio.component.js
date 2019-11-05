import React from 'react';

import styles from './radio.module.css';

const Radio = ({ name, value, label, onChange, disabled = false, checked }) => (
  <label
    className={`${styles.radio} ${checked ? styles.active : ''}  ${
      disabled ? styles.disabled : ''
    }`}
  >
    <input
      type="radio"
      id={name}
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

export default Radio;
