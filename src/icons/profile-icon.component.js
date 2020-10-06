import React from 'react';
import PropTypes from 'prop-types';

const ProfileIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3.6c2.04 0 3.6 1.56 3.6 3.6s-1.56 3.6-3.6 3.6-3.6-1.56-3.6-3.6S9.96 3.6 12 3.6zm0 17.04c-3 0-5.64-1.56-7.2-3.84 0-2.4 4.8-3.72 7.2-3.72 2.4 0 7.2 1.32 7.2 3.72-1.56 2.28-4.2 3.84-7.2 3.84z"
      fill="currentColor"
    />
  </svg>
);

ProfileIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ProfileIcon;
