import React from 'react';
import PropTypes from 'prop-types';

const LinkedInIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
  >
    <path d="M30 0a5 5 0 015 5v24.107a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h25zM12.547 13.989H9.101v12.036h3.446V13.989zm8.864-.367c-2.36 0-3.355 1.988-3.355 1.988v-1.62h-3.305v12.035h3.305v-6.318c0-1.692.72-2.7 2.1-2.7 1.267 0 1.876.967 1.876 2.7v6.318h3.43v-7.62c0-3.225-1.69-4.783-4.05-4.783zM10.808 7.97c-1.126 0-2.038.994-2.038 2.22 0 1.227.912 2.222 2.038 2.222s2.038-.995 2.038-2.222c0-1.226-.912-2.22-2.038-2.22z" />
  </svg>
);

LinkedInIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LinkedInIcon;
