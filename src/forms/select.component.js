import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useModal from '../containers/use-modal.hook';
import Textfield from './text-field.component';

import styles from './select.module.css';

const Select = ({ name, value, options, onChange, disabled }) => {
  const { isVisible, toggle } = useModal(false);
  const [selected, setSelected] = useState(value);

  return (
    <div className={`${styles.select} ${disabled ? styles.disabled : ''}`}>
      <div
        className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        onClick={!disabled ? toggle : null}
      >
        <Textfield
          classNames={[styles.text]}
          name={name}
          value={selected ? selected.name : ''}
          readOnly
          disabled={disabled}
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
                  if (!disabled) {
                    setSelected(option);
                    toggle();
                    onChange({
                      target: { name: name, value: option.value }
                    });
                  }
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
