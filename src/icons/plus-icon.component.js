import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M15 0a3.742 3.742 0 00-3.75 3.75v7.5h-7.5A3.742 3.742 0 000 15a3.742 3.742 0 003.75 3.75h7.5v7.5A3.742 3.742 0 0015 30a3.742 3.742 0 003.75-3.75v-7.5h7.5A3.742 3.742 0 0030 15a3.742 3.742 0 00-3.75-3.75h-7.5v-7.5A3.742 3.742 0 0015 0z"
      fill="currentColor"
    />
  </svg>
);

PlusIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default PlusIcon;
