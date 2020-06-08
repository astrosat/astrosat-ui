import React from 'react';
import PropTypes from 'prop-types';

import styles from './progress-bar.module.css';

const Filler = ({ percentage }) => {
  return (
    <div className={styles.filler} style={{ width: `${percentage}%` }}></div>
  );
};

const ProgressBar = ({ percentage, className }) => {
  return (
    <div className={`${styles.progressBar} ${className}`}>
      <Filler percentage={percentage} />
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
