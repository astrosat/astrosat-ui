import React from 'react';
import PropTypes from 'prop-types';

const CorrectIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm8.902-22.922a.945.945 0 01.314.222l-.001-.001a1.055 1.055 0 010 1.445L11.845 21.7a.946.946 0 01-1.38 0l-5.18-5.425a1.055 1.055 0 010-1.444.941.941 0 011.38 0l4.49 4.703L22.836 7.3a.944.944 0 011.067-.222z"
      fill="currentColor"
    />
  </svg>
);

CorrectIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default CorrectIcon;
