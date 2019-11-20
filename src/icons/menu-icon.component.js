import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
  >
    <path d="M6.5 11.9h22c1.012 0 1.834-.836 1.834-1.866 0-1.03-.822-1.867-1.834-1.867h-22c-1.012 0-1.833.836-1.833 1.867 0 1.03.821 1.866 1.833 1.866zm22.437 3.734H12.175c-.771 0-1.397.836-1.397 1.866 0 1.03.626 1.867 1.397 1.867h16.762c.77 0 1.397-.836 1.397-1.867 0-1.03-.626-1.866-1.397-1.866zm.524 7.466H18.984c-.481 0-.873.837-.873 1.867s.392 1.867.873 1.867h10.477c.482 0 .873-.837.873-1.867s-.391-1.867-.873-1.867z" />
  </svg>
);

MenuIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MenuIcon;
