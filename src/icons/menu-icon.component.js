import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M1.714 6.69h20.571C23.231 6.69 24 5.91 24 4.947S23.231 3.2 22.285 3.2H1.714C.768 3.2 0 3.982 0 4.946 0 5.909.768 6.69 1.714 6.69zm20.98 3.492H7.02c-.72 0-1.306.782-1.306 1.745 0 .963.585 1.746 1.306 1.746h15.674c.72 0 1.306-.782 1.306-1.746 0-.963-.585-1.745-1.306-1.745zm.49 6.981h-9.797c-.45 0-.816.783-.816 1.746s.366 1.746.816 1.746h9.797c.45 0 .816-.783.816-1.746s-.366-1.746-.816-1.746z"
      fill="currentColor"
    />
  </svg>
);

MenuIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MenuIcon;
