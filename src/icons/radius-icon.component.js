import React from 'react';
import PropTypes from 'prop-types';

const RadiusIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M12 23.52c6.362 0 11.52-5.158 11.52-11.52C23.52 5.638 18.362.48 12 .48 5.638.48.48 5.638.48 12c0 6.362 5.158 11.52 11.52 11.52z"
      stroke="currentColor"
    />
    <path
      d="M12 14.56a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z"
      fill="currentColor"
    />
    <path
      d="M14.133 12.427h9.387"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
);

RadiusIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default RadiusIcon;
