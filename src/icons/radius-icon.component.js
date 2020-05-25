import React from 'react';
import PropTypes from 'prop-types';

const RadiusIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M15 29.4c7.953 0 14.4-6.447 14.4-14.4S22.953.6 15 .6.6 7.047.6 15 7.047 29.4 15 29.4z"
      stroke="currentColor"
    />
    <path
      d="M15 18.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z"
      fill="currentColor"
    />
    <path
      d="M17.667 15.533H29.4"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
);

RadiusIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default RadiusIcon;
