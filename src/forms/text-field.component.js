import React from 'react';

import ValidIcon from './valid.svg';
import InvalidIcon from './invalid.svg';

import styles from './text-field.module.css';

const Textfield = ({
  name,
  value,
  onChange,
  disabled = false,
  placeholder = '',
  valid,
  classNames,
  required = false,
  autoFocus = false
}) => {
  let classes = [styles.textfield];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <div>
      <input
        type="text"
        name={name}
        value={value}
        className={classes}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
      {valid && <ValidIcon className={`${styles.icon} ${styles.valid}`} />}
      {valid !== undefined && !valid && (
        <InvalidIcon className={`${styles.icon} ${styles.invalid}`} />
      )}
    </div>
  );
};

export default Textfield;
