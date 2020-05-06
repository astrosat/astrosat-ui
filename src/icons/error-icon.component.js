import React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <g clip-path="url(#clip0)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15zm-17.304 0L7.42 9.725c-.59-.59-.555-1.588.08-2.223.637-.635 1.633-.671 2.225-.08L15 12.695l5.275-5.275c.592-.59 1.587-.556 2.224.08.635.636.672 1.633.08 2.223L17.304 15l5.275 5.276c.59.59.556 1.587-.08 2.223-.636.635-1.632.671-2.224.08L15 17.305 9.725 22.58c-.592.59-1.588.554-2.223-.081-.636-.635-.673-1.632-.08-2.223l5.274-5.275z"
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

ErrorIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ErrorIcon;
