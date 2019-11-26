import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './text-field.module.css';
import passwordStyles from './password-field.module.css';

const PasswordField = ({
  name,
  value,
  onChange,
  placeholder = '',
  classNames,
  required = false,
  autoFocus = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  let classes = [styles.textfield];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <div className={styles.container}>
      <input
        type={isVisible ? 'text' : 'password'}
        name={name}
        value={value}
        className={classes}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
      <button
        type="button"
        className={passwordStyles.passwordButton}
        onClick={toggleVisibility}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

PasswordField.propTypes = {};

export default PasswordField;
