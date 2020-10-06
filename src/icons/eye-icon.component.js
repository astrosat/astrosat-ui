import React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M12 15.226c1.807 0 3.273-1.437 3.273-3.209 0-1.771-1.466-3.208-3.273-3.208-1.807 0-3.273 1.437-3.273 3.208 0 1.772 1.466 3.209 3.273 3.209z"
      fill="currentColor"
    />
    <path
      d="M12 5.6c-7.455 0-12 5.556-12 6.417 0 .86 4.545 6.417 12 6.417 7.456 0 12-5.556 12-6.417 0-.861-4.544-6.417-12-6.417zm0 10.694a4.44 4.44 0 01-1.67-.325 4.37 4.37 0 01-1.415-.928 4.273 4.273 0 01-.946-1.387 4.206 4.206 0 010-3.274c.22-.52.54-.991.946-1.388a4.37 4.37 0 011.415-.927A4.439 4.439 0 0112 7.739c1.157 0 2.267.45 3.086 1.253a4.236 4.236 0 011.278 3.025c0 1.135-.46 2.223-1.278 3.025A4.408 4.408 0 0112 16.295z"
      fill="currentColor"
    />
  </svg>
);

EyeIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default EyeIcon;
