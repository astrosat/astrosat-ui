import React, { useState } from 'react';
import PropTypes from 'prop-types';

import zxcvbn from 'zxcvbn';

import styles from './password-strength-meter.module.css';

const passwordStrength = score => {
  switch (score) {
    case 0:
      return 'Empty';
    case 1:
      return 'Empty';
    case 2:
      return 'Weak';
    case 3:
      return 'Fair';
    case 4:
      return 'Strong';
    default:
      return 'Empty';
  }
};

const PasswordStrengthMeter = ({ password, ariaLabel }) => {
  const passwordResult = password
    ? zxcvbn(password)
    : { score: 0, feedback: { suggestion: [] } };
  const strength = passwordStrength(passwordResult.score);
  return (
    <div>
      <progress
        className={`${styles.passwordMeter} ${styles[strength]}`}
        value={passwordResult.score}
        // max="4"
        aria-label={ariaLabel}
      />
      <div>
        <strong>Password Strength:</strong>&nbsp;{strength}
      </div>
      <ul>
        {passwordResult.feedback.suggestions.map(suggestion => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string
};

export default PasswordStrengthMeter;
