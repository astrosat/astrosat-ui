import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import styles from './password-strength-meter.module.css';

const passwordStrength = score => {
  switch (score) {
    case 0:
    case 1:
      return <div className={styles.wordWeak}>Weak</div>;
    case 2:
    case 3:
      return <div className={styles.wordFair}>Fair</div>;
    case 4:
      return <div className={styles.wordStrong}>Strong</div>;
    default:
      return null;
  }
};
const PasswordStrengthMeter = ({ password, ariaLabel }) => {
  const passwordResult = zxcvbn(password ? password : '');
  const strength = passwordStrength(password && passwordResult.score);

  return (
    <div className={styles.passwordScoreWrapper}>
      <meter
        className={styles.meter}
        max="4"
        value={passwordResult.score}
        aria-label={ariaLabel}
      />
      <div className={styles.strength}>{strength}</div>
    </div>
  );
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string
};

export default PasswordStrengthMeter;
