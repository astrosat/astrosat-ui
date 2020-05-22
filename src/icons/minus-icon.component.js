import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M3.75 11A3.742 3.742 0 000 14.75a3.742 3.742 0 003.75 3.75h22.5A3.742 3.742 0 0030 14.75 3.742 3.742 0 0026.25 11H3.75z"
      fill="currentColor"
    />
  </svg>
);

MinusIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MinusIcon;
