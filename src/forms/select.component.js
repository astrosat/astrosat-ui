import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useModal from '../containers/use-modal.hook';
import Textfield from './text-field.component';

import styles from './select.module.css';

const Select = ({ options }) => {
  const { isVisible, toggle } = useModal(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.select}>
      <div
        className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        onClick={toggle}
      >
        <Textfield
          classNames={[styles.text]}
          value={selected ? selected.name : ''}
          readOnly
        />
      </div>

      {isVisible && (
        <ul className={styles.options}>
          {options.map(option => {
            return (
              <li
                key={option.name}
                name={option.name}
                className={styles.option}
                onClick={() => {
                  console.log('Option Clicked: ', option.value);
                  setSelected(option);
                }}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.any
    })
  )
};

export default Select;
