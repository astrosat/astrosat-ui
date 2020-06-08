import React from 'react';
import PropTypes from 'prop-types';

const FilterIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M28.709 0H1.293C.81 0 .366.263.144.682c-.225.425-.184.938.102 1.327L10.29 15.81l.01.015c.365.48.563 1.062.563 1.66v11.253c-.001.335.132.654.374.892.24.235.568.369.909.369.174 0 .345-.035.505-.1l5.645-2.1c.505-.15.84-.614.84-1.175v-9.139c.001-.598.2-1.18.564-1.662l.01-.013L29.754 2.007c.287-.39.326-.9.102-1.326A1.296 1.296 0 0028.71 0z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

FilterIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FilterIcon;
