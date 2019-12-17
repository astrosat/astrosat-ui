import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path
      fill="currentColor"
      d="M25 10c-8.25 0-15 6.75-15 15s6.75 15 15 15 15-6.75 15-15-6.75-15-15-15zm0 4.5c2.55 0 4.5 1.95 4.5 4.5s-1.95 4.5-4.5 4.5-4.5-1.95-4.5-4.5 1.95-4.5 4.5-4.5zm0 21.3c-3.75 0-7.05-1.95-9-4.8 0-3 6-4.65 9-4.65S34 28 34 31c-1.95 2.85-5.25 4.8-9 4.8z"
    />
  </svg>
);

CloseIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default CloseIcon;
