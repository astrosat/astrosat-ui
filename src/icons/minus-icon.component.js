import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M3 8.8c-1.662 0-3 1.338-3 3s1.338 3 3 3h18c1.662 0 3-1.338 3-3s-1.338-3-3-3H3z"
      fill="currentColor"
    />
  </svg>
);

MinusIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MinusIcon;
