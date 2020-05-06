import React from 'react';
import PropTypes from 'prop-types';

const LinkedinIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M25.714 0a4.23 4.23 0 013.03 1.288A4.457 4.457 0 0130 4.398v21.204a4.457 4.457 0 01-1.255 3.11A4.231 4.231 0 0125.715 30H4.284a4.231 4.231 0 01-3.03-1.288A4.457 4.457 0 010 25.602V4.398c0-1.166.452-2.285 1.255-3.11A4.231 4.231 0 014.285 0h21.43zm-14.96 12.305H7.802V22.89h2.954V12.305zm7.598-.323c-2.023 0-2.875 1.748-2.875 1.748v-1.425h-2.833v10.586h2.833v-5.557c0-1.488.617-2.375 1.8-2.375 1.086 0 1.608.85 1.608 2.375v5.557h2.94V16.19c0-2.837-1.449-4.207-3.472-4.207zM9.264 7.01c-.965 0-1.747.875-1.747 1.953 0 1.08.782 1.954 1.747 1.954.965 0 1.747-.875 1.747-1.954 0-1.078-.782-1.953-1.747-1.953z"
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

LinkedinIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LinkedinIcon;
