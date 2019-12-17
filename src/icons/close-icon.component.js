import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
  >
    <path
      fill="currentColor"
      d="M8.732 11.253l15.713 15.714c.723.723 1.912.707 2.653-.034.742-.742.757-1.93.034-2.653L11.419 8.566c-.723-.722-1.912-.707-2.653.034-.742.742-.757 1.93-.034 2.653z"
    />
    <path
      fill="currentColor"
      d="M10.554 26.967l15.714-15.713c.723-.723.707-1.912-.034-2.653-.742-.742-1.93-.757-2.653-.034L7.867 24.28c-.723.723-.707 1.912.034 2.653.742.742 1.93.757 2.653.034z"
    />
  </svg>
);

CloseIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default CloseIcon;
