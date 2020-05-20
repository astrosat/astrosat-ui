import React from 'react';
import PropTypes from 'prop-types';

const RotateIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M20.07 22.617a8.7 8.7 0 01-5.376 1.767c-.252-.003-2.355-.354-2.535-.414-.087-.03-1.74-.774-1.749-.78a9.385 9.385 0 01-2.088-1.671 63.812 63.812 0 01-.687-.828c-1.257-1.677-2.184-4.116-2.184-6.429h2.2l-3.676-5.88L.3 14.265h2.205c0 2.715 1.005 5.55 2.352 7.632.018.03 1.398 1.797 1.419 1.821.807.864 1.722 1.59 2.715 2.175.027.015 1.698.819 1.962.915.126.045.843.267 1.08.327.159.039 1.503.282 1.584.291.405.042.807.072 1.209.072 2.457 0 4.851-.804 6.909-2.34.654-.492.813-1.458.354-2.16-.462-.702-1.365-.873-2.019-.381zM9.93 7.383a8.7 8.7 0 015.376-1.767c.252.003 2.355.354 2.535.414.087.03 1.74.774 1.752.78a9.385 9.385 0 012.088 1.671c.01.009.651.777.687.828 1.254 1.677 2.184 4.116 2.184 6.429H22.35l3.675 5.88 3.675-5.88h-2.205c0-2.715-1.005-5.55-2.352-7.632-.015-.03-1.395-1.797-1.419-1.821a12.139 12.139 0 00-2.715-2.175c-.027-.015-1.698-.819-1.962-.915a23.707 23.707 0 00-1.08-.327 58.056 58.056 0 00-1.584-.291 11.72 11.72 0 00-1.209-.072c-2.457 0-4.851.804-6.909 2.34-.654.492-.813 1.458-.354 2.16.462.699 1.365.87 2.019.378"
      fill="currentColor"
    />
  </svg>
);

RotateIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default RotateIcon;
