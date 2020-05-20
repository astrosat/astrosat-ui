import React from 'react';
import PropTypes from 'prop-types';

const MapPinIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      clipRule="evenodd"
      d="M14.006 28.743a.872.872 0 001.238 0c.367-.367 9.006-9.11 9.006-18.118C24.25 5.318 19.932 1 14.625 1S5 5.318 5 10.625c0 9.009 8.639 17.751 9.006 18.118z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M14.625 15a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="currentColor" />
  </svg>
);

MapPinIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MapPinIcon;
