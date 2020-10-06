import React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-13.843 0L5.936 7.78C5.465 7.306 5.493 6.51 6 6c.51-.508 1.306-.537 1.78-.065L12 10.157l4.22-4.22c.474-.473 1.27-.445 1.78.064.507.509.536 1.306.063 1.778L13.843 12l4.22 4.22c.473.473.445 1.27-.063 1.779-.51.508-1.306.537-1.78.065L12 13.844l-4.22 4.22c-.474.472-1.27.443-1.778-.065-.51-.508-.539-1.306-.065-1.778l4.22-4.22z"
      fill="currentColor"
    />
  </svg>
);

ErrorIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ErrorIcon;
