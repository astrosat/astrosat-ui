import React from 'react';

import clsx from 'clsx';

import CorrectIcon from '../icons/correct-icon.component';
import ErrorIcon from '../icons/error-icon.component';

import styles from './text-field.module.css';

const Textfield = ({ valid, className, ariaLabel, ...rest }, ref) => {
  const invalid = valid !== undefined && valid !== null && !valid;
  return (
    <div
      className={clsx(styles.container, {
        [styles.valid]: valid,
        [styles.invalid]: invalid
      })}
    >
      <input
        ref={ref}
        type="text"
        className={clsx(styles.textfield, className)}
        aria-label={ariaLabel}
        {...rest}
      />
      {valid && <CorrectIcon classes={styles.icon} />}
      {invalid && <ErrorIcon classes={styles.icon} />}
    </div>
  );
};

export default React.forwardRef(Textfield);
