import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ShowHideIcon from '../icons/show-hide-icon';

import styles from './text-field.module.css';
import passwordStyles from './password-field.module.css';

const PasswordField = ({
  name,
  value,
  onChange,
  placeholder = '',
  classNames,
  required = false,
  autoFocus = false,
  ariaLabel
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
        aria-label={ariaLabel}
        required={required}
        autoFocus={autoFocus}
      />
      <span data-testid="icon-span" onClick={toggleVisibility}>
        <ShowHideIcon
          type={isVisible ? 'hide' : 'show'}
          classes={[passwordStyles.showHideIcon]}
        />
      </span>
    </div>
  );
};

PasswordField.propTypes = {};

export default PasswordField;
