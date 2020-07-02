import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import styles from './password-strength-meter.module.css';

const passwordStrength = score => {
  switch (score) {
    case 0:
      return <div className={styles.wordEmpty}>Empty</div>;
    case 1:
      return <div className={styles.wordWeak}>Weak</div>;
    case 2:
      return <div className={styles.wordWeak}>Weak</div>;
    case 3:
      return <div className={styles.wordFair}>Fair</div>;
    case 4:
      return <div className={styles.wordStrong}>Strong</div>;
    default:
      return <div className={styles.wordWeak}>Weak</div>;
  }
};
const PasswordStrengthMeter = ({ password, ariaLabel }) => {
  const passwordResult = password ? zxcvbn(password) : { score: 0 };
  console.log(passwordResult);

  const strength = passwordStrength(passwordResult.score);

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
