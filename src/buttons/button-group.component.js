import React from 'react';
import PropTypes from 'prop-types';

import Button from './button.component';

import styles from './button-group.module.css';

const ButtonGroup = ({ active, onClick, options }) => {
  return (
    <div className={styles.group}>
      {Object.entries(options).map(([key, label], index) => {
        // console.log('INDEX: ', index, options.length, options.length - 1);
        return (
          <Button
            key={key}
            onClick={event => onClick(key, event)}
            classNames={[
              styles.button,
              active === key ? styles.active : styles.inactive
            ]}
            // classNames={`${styles.button} ${
            //   selected === key ? styles.selected : styles.unselected
            // }`}
            active={active === key ? true : false}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};

ButtonGroup.propTypes = {
  active: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default ButtonGroup;
