import React from 'react';
import PropTypes from 'prop-types';

const ProfileIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M15 0C6.75 0 0 6.75 0 15s6.75 15 15 15 15-6.75 15-15S23.25 0 15 0zm0 4.5c2.55 0 4.5 1.95 4.5 4.5s-1.95 4.5-4.5 4.5-4.5-1.95-4.5-4.5 1.95-4.5 4.5-4.5zm0 21.3c-3.75 0-7.05-1.95-9-4.8 0-3 6-4.65 9-4.65S24 18 24 21c-1.95 2.85-5.25 4.8-9 4.8z"
      fill="currentColor"
    />
  </svg>
);

ProfileIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ProfileIcon;
