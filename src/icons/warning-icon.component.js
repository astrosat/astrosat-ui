import React from 'react';
import PropTypes from 'prop-types';

const WarningIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M12 24c6.626 0 12-5.374 12-12S18.626 0 12 0 0 5.374 0 12s5.374 12 12 12zm1.5-10.5a1.5 1.5 0 11-3 0V6a1.5 1.5 0 113 0v7.5zM12 16.476a1.5 1.5 0 110 2.999 1.5 1.5 0 010-2.999z"
      fill="currentColor"
    />
  </svg>
);

WarningIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default WarningIcon;
