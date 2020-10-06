import React from 'react';
import PropTypes from 'prop-types';

const InfoIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M9.059 21.177h1.058V10.588H9.06A1.06 1.06 0 018 9.53v-.706a1.059 1.059 0 011.059-1.059h4.234a1.059 1.059 0 011.06 1.059v12.353h1.058a1.058 1.058 0 011.06 1.058v.707A1.059 1.059 0 0115.41 24H9.06A1.059 1.059 0 018 22.942v-.707a1.059 1.059 0 011.059-1.058zM12.235 0a2.824 2.824 0 10-.09 5.648A2.824 2.824 0 0012.234 0z"
      fill="currentColor"
    />
  </svg>
);

InfoIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default InfoIcon;
