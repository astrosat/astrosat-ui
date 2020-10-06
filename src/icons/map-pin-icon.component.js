import React from 'react';
import PropTypes from 'prop-types';

const MapPinIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      clipRule="evenodd"
      d="M11.205 22.995a.698.698 0 00.99 0C12.489 22.7 19.4 15.707 19.4 8.5c0-4.246-3.455-7.7-7.7-7.7C7.454.8 4 4.254 4 8.5c0 7.207 6.911 14.2 7.205 14.495z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M11.7 12a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
      fill="currentColor"
    />
  </svg>
);

MapPinIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MapPinIcon;
