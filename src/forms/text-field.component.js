import React from 'react';

import ValidIcon from './valid.svg';
import InvalidIcon from './invalid.svg';

import styles from './text-field.module.css';

const Textfield = ({
  onChange,
  disabled = false,
  placeholder = '',
  valid,
  classNames
}) => {
  let classes = [styles.textfield];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <div>
      <input
        className={classes}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
      />
      {valid && <ValidIcon className={`${styles.icon} ${styles.valid}`} />}
      {valid !== undefined && !valid && (
        <InvalidIcon className={`${styles.icon} ${styles.invalid}`} />
      )}
    </div>
  );
};

export default Textfield;
