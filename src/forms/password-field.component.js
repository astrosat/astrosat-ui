import React, { useState } from 'react';
import clsx from 'clsx';

import ShowHideIcon from '../icons/show-hide-icon';

import styles from './text-field.module.css';
import passwordStyles from './password-field.module.css';

const PasswordField = (
  { placeholder = '', classNames, ariaLabel, ...rest },
  ref
) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const className = clsx(styles.textfield, classNames);

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        type={isVisible ? 'text' : 'password'}
        className={className}
        placeholder={placeholder}
        aria-label={ariaLabel}
        {...rest}
      />
      <span data-testid="icon-span" onClick={toggleVisibility}>
        <ShowHideIcon
          type={isVisible ? 'hide' : 'show'}
          classes={passwordStyles.showHideIcon}
        />
      </span>
    </div>
  );
};

export default React.forwardRef(PasswordField);
