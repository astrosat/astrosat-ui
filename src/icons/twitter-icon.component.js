import React from 'react';
import PropTypes from 'prop-types';

const TwitterIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M25.714 0a4.23 4.23 0 013.03 1.288A4.457 4.457 0 0130 4.398v21.204a4.457 4.457 0 01-1.255 3.11A4.231 4.231 0 0125.715 30H4.284a4.231 4.231 0 01-3.03-1.288A4.457 4.457 0 010 25.602V4.398c0-1.166.452-2.285 1.255-3.11A4.231 4.231 0 014.285 0h21.43zM18.03 8.32c-2.014 0-3.495 2.085-3.04 4.25-2.593-.143-4.892-1.521-6.431-3.617-.817 1.557-.424 3.593.966 4.623a2.875 2.875 0 01-1.414-.434c-.034 1.604 1.003 3.105 2.503 3.44a2.839 2.839 0 01-1.41.058c.398 1.376 1.55 2.375 2.916 2.404-1.311 1.14-2.964 1.65-4.62 1.434 1.38.981 3.02 1.555 4.783 1.555 5.794 0 9.067-5.43 8.87-10.298a6.756 6.756 0 001.556-1.792 5.753 5.753 0 01-1.791.545 3.427 3.427 0 001.371-1.916c-.606.4-1.277.686-1.982.841-.569-.673-1.38-1.093-2.277-1.093z"
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

TwitterIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default TwitterIcon;
