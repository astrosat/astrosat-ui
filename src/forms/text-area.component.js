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
  readOnly = false
}) => {
  let classes = [styles.textarea];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <textarea
      name={name}
      className={classes}
      disabled={disabled}
      onChange={onChange}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      required={required}
      autoFocus={autoFocus}
      readOnly={readOnly}
    >
      {value}
    </textarea>
  );
};

export default TextArea;
