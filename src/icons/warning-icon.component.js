import React from 'react';
import PropTypes from 'prop-types';

const WarningIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M15 30c8.283 0 15-6.717 15-15 0-8.283-6.717-15-15-15C6.717 0 0 6.717 0 15c0 8.283 6.717 15 15 15zm1.875-13.125a1.875 1.875 0 11-3.75 0V7.5a1.875 1.875 0 113.75 0v9.375zM15 20.595a1.875 1.875 0 110 3.75 1.875 1.875 0 010-3.75z"
      fill="currentColor"
    />
  </svg>
);

WarningIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default WarningIcon;
