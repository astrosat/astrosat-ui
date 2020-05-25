import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M2.142 8.363h25.714c1.183 0 2.144-.977 2.144-2.18C30 4.977 29.04 4 27.856 4H2.142C.96 4 0 4.977 0 6.182c0 1.204.96 2.181 2.142 2.181zm26.225 4.364H8.775c-.9 0-1.632.978-1.632 2.182 0 1.203.731 2.182 1.632 2.182h19.592c.9 0 1.633-.977 1.633-2.182 0-1.204-.732-2.182-1.633-2.182zm.613 8.727H16.734c-.562 0-1.02.978-1.02 2.182s.458 2.182 1.02 2.182H28.98c.563 0 1.02-.978 1.02-2.182s-.457-2.182-1.02-2.182z"
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

MenuIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MenuIcon;
