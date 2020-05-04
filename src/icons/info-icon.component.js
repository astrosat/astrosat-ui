import React from 'react';
import PropTypes from 'prop-types';

const InfoIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M11.324 26.471h1.322V13.235h-1.322A1.324 1.324 0 0110 11.912v-.882a1.324 1.324 0 011.324-1.324h5.293a1.323 1.323 0 011.323 1.324v15.441h1.324a1.323 1.323 0 011.324 1.323v.883A1.324 1.324 0 0119.264 30h-7.94A1.324 1.324 0 0110 28.677v-.883a1.323 1.323 0 011.324-1.323zm3.97-26.47a3.53 3.53 0 10-.114 7.058A3.53 3.53 0 0015.294 0z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

InfoIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default InfoIcon;
