import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import clsx from 'clsx';
import styles from './password-strength-meter.module.css';

const passwordStrength = score => {
  switch (score) {
    case 0:
    case 1:
      return 'Weak';
    case 2:
    case 3:
      return 'Fair';
    case 4:
      return 'Strong';
    default:
      return null;
  }
};
const PasswordStrengthMeter = ({ password }) => {
  const passwordResult = zxcvbn(password ? password : '');
  const strength = passwordStrength(password && passwordResult.score);

  return (
    <div className={clsx(styles.passwordScoreWrapper, styles[strength])}>
      <div className={styles.meter}>
        <div className={styles.strengthBar} />
      </div>
      <p className={styles.strengthText}>{strength}</p>
    </div>
  );
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string
};

export default PasswordStrengthMeter;
