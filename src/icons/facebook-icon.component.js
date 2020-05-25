import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M25.714 0a4.23 4.23 0 013.03 1.288A4.457 4.457 0 0130 4.398v21.204a4.457 4.457 0 01-1.255 3.11A4.231 4.231 0 0125.715 30H4.284a4.231 4.231 0 01-3.03-1.288A4.457 4.457 0 010 25.602V4.398c0-1.166.452-2.285 1.255-3.11A4.231 4.231 0 014.285 0h21.43zm-6.5 5.825H16.81c-2.586 0-3.751 1.264-3.751 3.68v2.577H11.25v3.272h1.808v9.612h3.474v-9.652h2.425l.257-3.232H16.53v-1.84c0-.763.139-1.064.803-1.064h1.88V5.825z"
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

FacebookIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FacebookIcon;
