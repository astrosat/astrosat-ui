import React from 'react';
import PropTypes from 'prop-types';

const PolygonIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M1 16.2l9.206 10.22h9.922L29 13.338 18.453 3 1 16.2z"
      stroke="currentColor"
    />
  </svg>
);

PolygonIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default PolygonIcon;
