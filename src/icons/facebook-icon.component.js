import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
  >
    <path d="M30 0a5 5 0 015 5v24.107a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h25zm-7.583 6.622H19.61c-3.017 0-4.376 1.437-4.376 4.184v2.93h-2.109v3.72h2.109v10.928h4.053V17.41h2.829l.3-3.674h-3.13v-2.092c0-.867.162-1.21.937-1.21h2.194V6.623z" />
  </svg>
);

FacebookIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FacebookIcon;
