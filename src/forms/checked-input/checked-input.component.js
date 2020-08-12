import React from 'react';
import clsx from 'clsx';

import styles from './checked-input.module.css';

const CheckedInput = (
  {
    id,
    label,
    disabled = false,
    ariaLabel,
    className,
    style,
    type,
    value,
    ...rest
  },
  ref
) => {
  const inputId = `${id}${!!value ? `-${value}` : ''}-${type}`;

  return (
    <div
      className={clsx(
        styles.wrapper,
        {
          [styles.disabled]: disabled
        },
        className
      )}
      style={style}
    >
      <input
        id={inputId}
        className={styles.input}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        value={value}
        {...rest}
      />
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};

export default React.forwardRef(CheckedInput);
