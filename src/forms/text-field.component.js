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

  if (valid !== undefined) {
    if (valid) {
      classes = [...classes, styles.valid];
    } else {
      classes = [...classes, styles.invalid];
    }
  }
  console.log('CLASSES: ', classes);

  return (
    <div className={styles.container}>
      <input
        type="text"
        name={name}
        value={value}
        className={classes.join(' ')}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
      {valid && <ValidIcon className={`${styles.icon} ${styles.validIcon}`} />}
      {valid !== undefined && !valid && (
        <InvalidIcon className={`${styles.icon} ${styles.invalidIcon}`} />
      )}
    </div>
  );
};

export default Textfield;
