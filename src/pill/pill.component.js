import React from 'react';

import styles from './pill.module.css';

export const PillAction = ({ children, onClick }) => (
  <button className={styles.action} onClick={onClick}>
    {children}
  </button>
);

export const Pill = ({ action, children }) => (
  <div className={styles.pill}>
    {action}
    {children}
  </div>
);
