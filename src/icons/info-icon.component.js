import React from 'react';
import PropTypes from 'prop-types';

const InfoIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
  >
    <path
      fill="currentColor"
      d="M13.166 30.022h1.444V15.573h-1.444a1.445 1.445 0 01-1.445-1.444v-.963a1.445 1.445 0 011.445-1.445h5.778a1.445 1.445 0 011.445 1.445v16.856h1.445a1.445 1.445 0 011.445 1.444v.964a1.445 1.445 0 01-1.445 1.444h-8.668a1.445 1.445 0 01-1.445-1.444v-.964a1.445 1.445 0 011.445-1.444zM17.5 1.126a3.853 3.853 0 100 7.705 3.853 3.853 0 000-7.705z"
    />
  </svg>
);

InfoIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default InfoIcon;
