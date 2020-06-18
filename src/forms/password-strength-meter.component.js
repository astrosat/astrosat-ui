import React, { useState } from 'react';
import PropTypes from 'prop-types';

import zxcvbn from 'zxcvbn';

import styles from './password-strength-meter.module.css';
const passwordStrength = score => {
  switch (score) {
    case 0:
      return 'Empty';
    case 1:
      return '';
    case 2:
      return 'Weak';
    case 3:
      return 'Fair';
    case 4:
      return 'Strong';
    default:
      return 'Weak';
  }
};

const PasswordStrengthMeter = ({ password, ariaLabel }) => {
  const passwordResult = zxcvbn(password);
  const strength = passwordStrength(passwordResult.score);
  return (
    <div className={styles.passwordScoreWrapper}>
      <meter
        max="4"
        value={passwordResult.score}
        className={styles.meter}
        aria-Label={ariaLabel}
      >
        {passwordStrength}
      </meter>
      <div className={styles.strength}>{strength}</div>
    </div>
  );
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string
};

export default PasswordStrengthMeter;
