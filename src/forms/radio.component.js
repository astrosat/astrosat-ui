import React from 'react';

import styles from './radio.module.css';

const Radio = ({
  name,
  value,
  label,
  onChange,
  disabled = false,
  checked
  // classNames
}) => {
  // let classes = [styles.radio];
  // if (classNames) classes = [...classes, ...classNames];

  return (
    <label className={`${styles.radio} ${checked ? styles.active : ''}`}>
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
};

export default Radio;
