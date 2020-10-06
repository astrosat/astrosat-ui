import React from 'react';
import PropTypes from 'prop-types';

const PolygonIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M.8 12.96l7.365 8.177h7.937L23.2 10.67 14.762 2.4.8 12.96z"
      stroke="currentColor"
    />
  </svg>
);

PolygonIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default PolygonIcon;
