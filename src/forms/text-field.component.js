import React from 'react';

import clsx from 'clsx';

import CorrectIcon from '../icons/correct-icon.component';
import ErrorIcon from '../icons/error-icon.component';

import styles from './text-field.module.css';

const Textfield = (
  {
    id,
    name,
    value,
    placeholder = '',
    valid,
    className,
    disabled = false,
    required = false,
    autoFocus = false,
    readOnly = false,
    ariaLabel,
    onChange,
    onBlur
  },
  ref
) => {
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
        id={id}
        name={name}
        value={value}
        className={clsx(styles.textfield, className)}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={ariaLabel}
        required={required}
        autoFocus={autoFocus}
        readOnly={readOnly}
        onBlur={onBlur}
        onChange={onChange}
      />
      {valid && <CorrectIcon classes={styles.icon} />}
      {invalid && <ErrorIcon classes={styles.icon} />}
    </div>
  );
};

export default React.forwardRef(Textfield);
