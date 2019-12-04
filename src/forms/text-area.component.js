import React from 'react';

import styles from './text-area.module.css';

const TextArea = ({
  name,
  value,
  onChange,
  disabled = false,
  placeholder = '',
  classNames,
  rows,
  cols,
  required = false,
  autoFocus = false,
  readOnly = false,
  ariaLabel
}) => {
  let classes = [styles.textarea];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <textarea
      name={name}
      value={value}
      className={classes}
      disabled={disabled}
      onChange={onChange}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      aria-label={ariaLabel}
      required={required}
      autoFocus={autoFocus}
      readOnly={readOnly}
    ></textarea>
  );
};

export default TextArea;
