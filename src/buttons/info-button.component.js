import React from 'react';
import PropTypes from 'prop-types';

import InfoIcon from '../icons/info-icon.component';

import styles from './info-button.module.css';

const InfoButton = ({ onClick, classNames }) => (
  <button
    onClick={onClick}
    className={`${styles.info} ${classNames ? classNames.join(' ') : ''}`}
    aria-label="Info"
  >
    <InfoIcon classes={styles.icon} alt="Info" />
  </button>
);

InfoButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default InfoButton;
