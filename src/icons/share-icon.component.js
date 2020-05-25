import React from 'react';
import PropTypes from 'prop-types';

const ShareIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#clip0)" fill="currentColor">
      <path d="M8 17.906v-2.285l14 7.552L21.153 25 8 17.906zm0-3.528v-2.285L21.153 5 22 6.827 8 14.378z" />
      <path d="M25 1a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm0 16A5 5 0 1125 29a5 5 0 010-9.998zm0 2a3 3 0 100 6 3 3 0 000-6zM5 10a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

ShareIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ShareIcon;
