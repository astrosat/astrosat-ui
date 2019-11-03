import React from 'react';

import ValidIcon from './valid.svg';
import InvalidIcon from './invalid.svg';

import styles from './text-field.module.css';

const Textfield = ({
  onChange,
  disabled = false,
  placeholder = '',
  validate = false,
  classNames
}) => {
  const classes = [styles.textfield];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <span>
      <input
        className={classes}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
      />
      {validate && <ValidIcon className={`${styles.icon} ${styles.valid}`} /> }
      {/* {validate && !valid && <InvalidIcon className={`${styles.icon} ${styles.invalid}`} /> } */}
    </span>
  );
};

export default Textfield;
