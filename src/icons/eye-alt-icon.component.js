import React from 'react';
import PropTypes from 'prop-types';

const EyeAltIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#eye-alt-clip0)" fill="currentColor">
      <path d="M.335 15.917c1.958 2.454 7.783 8.998 14.674 8.998 6.891 0 12.717-6.544 14.675-8.998.421-.545.421-1.314 0-1.834-1.958-2.454-7.784-8.998-14.675-8.998C8.12 5.06 2.293 11.605.335 14.058a1.458 1.458 0 000 1.859zm14.674-6.89a5.935 5.935 0 015.95 5.948 5.935 5.935 0 01-5.95 5.95 5.935 5.935 0 01-5.949-5.95 5.935 5.935 0 015.95-5.949z" />
      <path d="M15.01 17.95a2.975 2.975 0 100-5.95 2.975 2.975 0 000 5.95z" />
    </g>
    <defs>
      <clipPath id="eye-alt-clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

EyeAltIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default EyeAltIcon;