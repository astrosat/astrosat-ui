import React from 'react';
import styles from './button-toggle.module.css';

const ButtonToggle = ({ selected, onSelect, options }) => {
  return (
    <div className={styles.group}>
      {Object.entries(options).map(([key, label]) => (
        <button
          key={key}
          onClick={event => onSelect(key, event)}
          className={`${styles.button} ${
            selected === key ? styles.selected : styles.unselected
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonToggle;
