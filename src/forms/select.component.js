import React from 'react';

import useModal from '../containers/use-modal.hook';
import Textfield from './text-field.component';

import styles from './select.module.css';

/**
 * @typedef Option
 * @property {string} name
 * @property {*} value
 */

/**
 * @param {{
 *   name?: string
 *   value?: any
 *   options: Option[]
 *   onChange: () => void
 *   disabled?: boolean
 * }} props
 */
const Select = ({ name, value, options, onChange, disabled, ...rest }, ref) => {
  const [isVisible, toggle] = useModal(false);

  /** @param {Option} option */
  const handleOptionClick = option => () => {
    if (!disabled) {
      toggle();
      if (onChange)
        onChange({
          target: { name: name, value: option.value }
        });
    }
  };

  return (
    <div className={`${styles.select} ${disabled && styles.disabled}`}>
      <div
        tabIndex={0}
        className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        onClick={!disabled ? toggle : null}
        onKeyPress={!disabled ? toggle : null}
      >
        <Textfield
          ref={ref}
          className={styles.textField}
          name={name}
          value={options?.find(option => option.value === value)?.name || ''}
          readOnly
          disabled={disabled}
          tabIndex={-1}
          {...rest}
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
                className={`${styles.option} ${value === option.value &&
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

export default React.forwardRef(Select);
