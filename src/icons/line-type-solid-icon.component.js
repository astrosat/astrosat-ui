import React from 'react';
import PropTypes from 'prop-types';

const LineTypeSolidIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path d="M0 12h24" stroke="currentColor" strokeWidth="3" />
  </svg>
);

LineTypeSolidIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LineTypeSolidIcon;
