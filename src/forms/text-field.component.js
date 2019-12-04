import React from 'react';

import CorrectIcon from '../icons/correct-icon.component';
import ErrorIcon from '../icons/error-icon.component';

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
  autoFocus = false,
  readOnly = false,
  ariaLabel
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
        aria-label={ariaLabel}
        required={required}
        autoFocus={autoFocus}
        readOnly={readOnly}
      />
      {valid && <CorrectIcon classes={`${styles.icon} ${styles.validIcon}`} />}
      {valid !== undefined && !valid && (
        <ErrorIcon classes={`${styles.icon} ${styles.invalidIcon}`} />
      )}
    </div>
  );
};

export default Textfield;
