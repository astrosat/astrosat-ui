import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#close-clip0)" fill="currentColor">
      <path d="M.82 4.96l24.218 24.22c1.114 1.114 2.947 1.09 4.089-.053 1.143-1.143 1.167-2.974.052-4.088L4.962.819C3.848-.292 2.015-.27.873.873-.27 2.016-.294 3.847.821 4.961z" />
      <path d="M4.961 29.18L29.18 4.961c1.114-1.114 1.09-2.947-.053-4.089C27.984-.27 26.153-.294 25.04.821L.82 25.038c-1.114 1.114-1.09 2.947.053 4.089 1.143 1.143 2.974 1.167 4.088.052z" />
    </g>
    <defs>
      <clipPath id="close-clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

CloseIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default CloseIcon;
