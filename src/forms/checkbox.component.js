import React from 'react';

import styles from './checkbox.module.css';

const Checkbox = ({ onChange, disabled = false, checked, classNames }) => {
  let classes = [styles.checkbox];
  if (classNames) classes = [...classes, ...classNames];

  return (
    <div>
      <input
        type="checkbox"
        className={classes}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <span className={styles.checkmark} />
    </div>
  );
};

export default Checkbox;
