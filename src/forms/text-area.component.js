import React from 'react';

import styles from './text-area.module.css';

const TextArea = ({ classNames, ariaLabel, ...rest }, ref) => {
  let classes = [styles.textarea];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <textarea ref={ref} className={classes} aria-label={ariaLabel} {...rest} />
  );
};

export default React.forwardRef(TextArea);
