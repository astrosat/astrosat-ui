import React from 'react';
import PropTypes from 'prop-types';

const OptionsIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M12.33 7.059a3.53 3.53 0 100-7.059 3.53 3.53 0 000 7.059zM12.33 15.53a3.53 3.53 0 100-7.06 3.53 3.53 0 000 7.06zM12.33 24a3.53 3.53 0 100-7.059 3.53 3.53 0 000 7.059z"
      fill="currentColor"
    />
  </svg>
);

OptionsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default OptionsIcon;
