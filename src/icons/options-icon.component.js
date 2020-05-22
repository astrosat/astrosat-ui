import React from 'react';
import PropTypes from 'prop-types';

const OptionsIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M15.412 8.824a4.412 4.412 0 100-8.824 4.412 4.412 0 000 8.824zM15.412 19.412a4.412 4.412 0 100-8.824 4.412 4.412 0 000 8.824zM15.412 30a4.412 4.412 0 100-8.823 4.412 4.412 0 000 8.823z"
      fill="currentColor"
    />
  </svg>
);

OptionsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default OptionsIcon;
