import React from 'react';
import PropTypes from 'prop-types';

const StoryIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.769 23.22c-.99-.65-2.99-1.743-5.25-1.743-2.413 0-5.049.454-6.118.659V1C1.331.84 4.084.401 6.518.401c2.452 0 4.647 1.33 5.25 1.729v21.092-.001zM11.855 23.22V2.13c.604-.4 2.8-1.729 5.25-1.729 2.437 0 5.19.438 6.118.599v21.135c-1.069-.205-3.705-.658-6.118-.658-2.258 0-4.26 1.093-5.25 1.743"
      fill="currentColor"
    />
  </svg>
);

StoryIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default StoryIcon;
