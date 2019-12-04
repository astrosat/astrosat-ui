import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../icons/close-icon.component';
// import CloseIcon from './close.svg';

import styles from './close-button.module.css';

const CloseButton = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`${styles.close} ${className}`}
    aria-label="Close"
  >
    <CloseIcon classes={styles.icon} alt="Close" />
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default CloseButton;
