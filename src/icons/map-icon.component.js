import React from 'react';
import PropTypes from 'prop-types';

const MapIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M15.078 6.36V22.1 6.36zm-11.43 0l5.324 1.1 5.992-1.36 5.905 1.36v15.827L14.864 22.1l-5.892 1.311L3.2 22.1V6.36h.448zM8.92 7.717v15.32-15.32z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.767 8.186c.112-.107 2.723-2.644 2.723-5.278C21.49 1.304 20.13 0 18.462 0c-1.67 0-3.028 1.304-3.028 2.908 0 2.634 2.61 5.171 2.722 5.278a.44.44 0 00.611 0zM16.3 2.908c0-1.146.97-2.078 2.163-2.078 1.192 0 2.162.932 2.162 2.078 0 1.793-1.502 3.642-2.162 4.37-.661-.728-2.163-2.576-2.163-4.37z"
      fill="currentColor"
    />
    <path
      d="M19.76 3.23c0-.763-.583-1.384-1.298-1.384-.716 0-1.298.621-1.298 1.384 0 .764.582 1.385 1.298 1.385.715 0 1.297-.62 1.297-1.384zm-1.73 0c0-.253.193-.46.432-.46.238 0 .432.207.432.46 0 .255-.194.462-.432.462-.239 0-.432-.207-.432-.462z"
      fill="currentColor"
    />
  </svg>
);

MapIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MapIcon;
