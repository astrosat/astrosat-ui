import React from 'react';
import PropTypes from 'prop-types';

const CorrectIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <g clip-path="url(#clip0)" fill="currentColor">
      <path d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z" />
      <path d="M25.215 7.8a.944.944 0 00-1.38 0l-11.68 12.235-4.49-4.703a.942.942 0 00-1.38 0 1.055 1.055 0 000 1.444l5.18 5.425a.944.944 0 001.379 0l12.37-12.957a1.055 1.055 0 000-1.445V7.8z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

CorrectIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default CorrectIcon;
