import React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >
    <g>
      <circle cx="12.5" cy="12.5" r="11.667" />
      <path
        fill="#fff"
        d="M7.149 8.791l9.207 9.208c.424.423 1.137.397 1.593-.058.455-.455.48-1.169.057-1.592L8.8 7.141c-.424-.423-1.137-.397-1.593.058-.455.455-.48 1.169-.057 1.592h-.001z"
      />
      <path
        fill="#FFF"
        d="M8.28 17.999l9.207-9.208c.424-.423.398-1.137-.057-1.592-.456-.456-1.169-.481-1.593-.058L6.63 16.349c-.424.423-.398 1.137.058 1.592.455.455 1.168.481 1.592.058z"
      />
    </g>
  </svg>
);

ErrorIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ErrorIcon;