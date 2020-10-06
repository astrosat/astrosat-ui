import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M20.571 0c.91 0 1.782.37 2.425 1.03A3.566 3.566 0 0124 3.518v16.964c0 .933-.361 1.828-1.004 2.488A3.385 3.385 0 0120.57 24H3.43c-.91 0-1.782-.37-2.425-1.03A3.566 3.566 0 010 20.482V3.518c0-.933.361-1.828 1.004-2.487A3.385 3.385 0 013.43 0H20.57zm-5.2 4.66h-1.924c-2.069 0-3 1.01-3 2.944v2.062H9v2.617h1.446v7.69h2.78V12.25h1.94l.205-2.585h-2.146V8.194c0-.61.11-.852.642-.852h1.505V4.66z"
      fill="currentColor"
    />
  </svg>
);

FacebookIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FacebookIcon;
