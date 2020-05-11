import React from 'react';
import styles from './pill.module.css';
import clsx from 'clsx';

const Pill = ({ action, children, className }) => (
  <div className={clsx(styles.pill, className)}>
    {action}
    <div className={styles.content}>{children}</div>
  </div>
);

export default Pill;
