import React from 'react';

import styles from './text-area.module.css';

const TextArea = ({
  onChange,
  disabled = false,
  rows,
  placeholder = '',
  classNames
}) => {
  let classes = [styles.textarea];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <textarea
      className={classes}
      disabled={disabled}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
