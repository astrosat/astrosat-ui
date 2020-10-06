import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M12 0c-1.662 0-3 1.338-3 3v6H3c-1.662 0-3 1.338-3 3s1.338 3 3 3h6v6c0 1.662 1.338 3 3 3s3-1.338 3-3v-6h6c1.662 0 3-1.338 3-3s-1.338-3-3-3h-6V3c0-1.662-1.338-3-3-3z"
      fill="currentColor"
    />
  </svg>
);

PlusIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default PlusIcon;
