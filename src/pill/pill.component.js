import React from 'react';
import styles from './pill.module.css';
import clsx from 'clsx';

export const PillAction = ({ children, className, onClick }) => (
  <button className={clsx(styles.action, className)} onClick={onClick}>
    {React.Children.map(children, element =>
      React.cloneElement(element, {
        ...element.props,
        classes: `${element.props.classes} ${styles.actionChild}`
      })
    )}
  </button>
);

export const Pill = ({ action, children, className }) => (
  <div className={clsx(styles.pill, className)}>
    {action}
    <div className={styles.content}>{children}</div>
  </div>
);
