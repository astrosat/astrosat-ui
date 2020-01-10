import React, { useState } from 'react';

import styles from './switch.module.css';

const Switch = ({
  name,
  value,
  label,
  onClick,
  disabled = false,
  checked = false,
  ariaLabel
}) => {
  const [isOn, setIsOn] = useState(checked);

  return (
    <label
      className={`${styles.switch} ${checked ? styles.active : ''}  ${
        disabled ? styles.disabled : ''
      }`}
    >
      <input
        type="checkbox"
        name={name}
        value={value ? value : name}
        disabled={disabled}
        onChange={() => (!disabled ? onClick(value) : null)}
        checked={isOn}
        aria-label={ariaLabel}
      />

      <button
        className={`${styles['toggle-btn']}
       ${isOn ? styles['toggle-btn-on'] : ''}`}
        disabled={disabled}
        onClick={event => {
          onClick(event);
          setIsOn(!isOn);
        }}
        aria-label={ariaLabel}
      />
      {label}
    </label>
  );
};

export default Switch;
