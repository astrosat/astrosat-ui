import React from 'react';
import PropTypes from 'prop-types';

const LineWidth3pxIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path d="M0 15h30H0z" fill="currentColor" />
    <path d="M0 15h30" stroke="currentColor" strokeWidth="3" />
  </svg>
);

LineWidth3pxIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LineWidth3pxIcon;
