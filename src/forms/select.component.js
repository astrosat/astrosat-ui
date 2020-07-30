import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useModal from '../containers/use-modal.hook';
import Textfield from './text-field.component';

import styles from './select.module.css';
import { useClickaway } from '../useClickaway';

/**
 * @typedef Option
 * @property {string} name
 * @property {*} value
 */

/**
 * @param {{
 *   id?: string
 *   placeholder?: string
 *   name?: string
 *   value?: any
 *   options: Option[]
 *   onChange: () => void
 *   disabled?: boolean
 * }} props
 */
const Select = (
  { id, placeholder, name, value, options, onChange, disabled },
  ref
) => {
  const [isVisible, toggle] = useModal(false);
  const [selected, setSelected] = useState(value);
  const [clickawayRef] = useClickaway(() => isVisible && toggle());

  /** @param {Option} option */
  const handleOptionClick = option => () => {
    if (!disabled) {
      setSelected(option);
      toggle();
      if (onChange)
        onChange({
          target: { name: name, value: option.value }
        });
    }
  };

  return (
    <div
      ref={clickawayRef}
      className={`${styles.select} ${disabled && styles.disabled}`}
    >
      <div
        tabIndex={0}
        className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        onClick={!disabled ? toggle : null}
        onKeyPress={!disabled ? toggle : null}
      >
        <Textfield
          ref={ref}
          id={id}
          placeholder={placeholder}
          className={styles.textField}
          name={name}
          value={selected ? selected.name : ''}
          readOnly
          disabled={disabled}
          tabIndex={-1}
        />
      </div>

      {isVisible && (
        <ul className={styles.options}>
          {options ? (
            options.map(option => (
              <li
                tabIndex={0}
                key={option.name}
                name={option.name}
                className={`${styles.option} ${selected === option &&
                  styles.selected}`}
                onClick={handleOptionClick(option)}
                onKeyPress={handleOptionClick(option)}
              >
                {option.name}
              </li>
            ))
          ) : (
            <li className={styles.noOption}>No Options</li>
          )}
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

export default React.forwardRef(Select);
