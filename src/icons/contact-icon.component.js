import React from 'react';
import PropTypes from 'prop-types';

const ContactIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M21.12 4A2.88 2.88 0 0124 6.88v9.6a2.88 2.88 0 01-2.88 2.88H2.88A2.88 2.88 0 010 16.48v-9.6A2.88 2.88 0 012.88 4h18.24zM7.978 12.273l-4.683 5.163a.48.48 0 00.174.762.447.447 0 00.495-.12l4.683-5.165a.48.48 0 00-.042-.646.447.447 0 00-.627.006zm7.186-.024a.48.48 0 00-.022.666l4.681 5.163c.173.19.46.201.646.023a.48.48 0 00.023-.665l-4.682-5.163a.447.447 0 00-.646-.024zm5.002-6.74l-7.642 5.965a.603.603 0 01-.725 0L4.163 5.507a.448.448 0 00-.642.09.48.48 0 00.089.66l7.638 5.965a1.504 1.504 0 001.828 0l7.642-5.965a.48.48 0 00-.045-.781.449.449 0 00-.508.031v.001z"
      fill="currentColor"
    />
  </svg>
);

ContactIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ContactIcon;
