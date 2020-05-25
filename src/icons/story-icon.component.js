import React from 'react';
import PropTypes from 'prop-types';

const StoryIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g
      clipPath="url(#clip0)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    >
      <path d="M14.711 29.026c-1.238-.814-3.738-2.18-6.563-2.18-3.016 0-6.31.568-7.646.823V1.25c1.162-.2 4.603-.748 7.646-.748 3.065 0 5.809 1.662 6.563 2.16v26.366-.001zM14.819 29.026V2.66c.754-.5 3.5-2.16 6.563-2.16 3.046 0 6.486.547 7.647.748v26.419c-1.336-.257-4.632-.823-7.647-.823-2.823 0-5.325 1.366-6.563 2.18" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

StoryIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default StoryIcon;
