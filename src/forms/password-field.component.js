import React, { useState } from 'react';
import clsx from 'clsx';

import ShowHideIcon from '../icons/show-hide-icon';

import styles from './text-field.module.css';
import Button from '../buttons/button.component';

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

  const className = clsx(styles.textfield, styles.passwordfield, classNames);

  return (
    <div className={styles.container}>
      <input
        type={isVisible ? 'text' : 'password'}
        name={name}
        value={value}
        className={className}
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

export default PasswordField;
