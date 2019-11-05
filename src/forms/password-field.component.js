import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VisibleIcon from './visible.svg';
import InvisibleIcon from './invisible.svg';

import styles from './text-field.module.css';
import passwordStyles from './password-field.module.css';

const PasswordField = ({ onChange, placeholder = '', classNames }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  let classes = [styles.textfield];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <div>
      <input
        className={classes}
        type={isVisible ? 'text' : 'password'}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        className={passwordStyles.passwordButton}
        onClick={toggleVisibility}
      >
        {isVisible ? (
          <InvisibleIcon className={passwordStyles.icon} />
        ) : (
          <VisibleIcon className={passwordStyles.icon} />
        )}
      </button>
    </div>
  );
};

PasswordField.propTypes = {};

export default PasswordField;
