import React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <g clip-path="url(#clip0)" fill="currentColor">
      <path d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z" />
      <path d="M7.42 9.724L20.275 22.58c.592.59 1.588.554 2.225-.081.635-.636.67-1.632.08-2.223L9.724 7.42c-.592-.59-1.588-.554-2.224.081-.636.635-.67 1.632-.08 2.223H7.42z" />
      <path d="M9.725 22.58L22.579 9.724c.591-.59.555-1.587-.08-2.222-.637-.637-1.632-.672-2.224-.081L7.421 20.276c-.592.59-.555 1.588.081 2.223.635.635 1.63.671 2.223.08z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

ErrorIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ErrorIcon;
