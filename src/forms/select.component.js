import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useModal from '../containers/use-modal.hook';
import Textfield from './text-field.component';

import styles from './select.module.css';

const Select = ({ name, value, options, onChange }) => {
  const { isVisible, toggle } = useModal(false);
  const [selected, setSelected] = useState(value);
  // console.log('SELECTED: ', selected);

  return (
    <div className={styles.select}>
      <div
        className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        onClick={toggle}
      >
        <Textfield
          classNames={[styles.text]}
          name={name}
          value={selected.name || ''}
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
                onClick={event => {
                  setSelected(option);
                  toggle();
                  console.log('OPTION: ', event);
                  onChange({
                    target: { name: name, value: option.value }
                  });
                  // console.log('OPTION: ', option);
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
  ),
  onChange: PropTypes.func.isRequired
};

export default Select;
