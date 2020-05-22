import React from 'react';
import PropTypes from 'prop-types';

const ImageIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M29.691 8.406a1.054 1.054 0 00-.192-.771 1.006 1.006 0 00-.669-.405l-2.706-.399-.492-2.739a1.018 1.018 0 00-1.182-.834l-9.906 1.866L6.84 3.987a1.022 1.022 0 00-1.152.879L5.409 6.84l-4.278.807a1.012 1.012 0 00-.654.432c-.153.225-.21.507-.162.777l3.069 17.052c.048.27.201.51.423.666a1.002 1.002 0 00.759.165l13.626-2.565 8.073 1.191c.048.006.099.012.147.012.498 0 .933-.375 1.005-.891l.297-2.103.171-.033a1.04 1.04 0 00.816-1.209l-.453-2.52 1.443-10.215zm-5.874-2.919l.186 1.029-3.168-.468 2.982-.561zM3.921 17.397L2.499 9.501l2.604-.492-1.182 8.388zm1.281 7.113l-.417-2.31 7.119 1.05-6.702 1.26zm21.894-12.279l-.906 6.432-.273 1.947-.306 2.169-.054.381-1.107-.162-6.291-.927-12.582-1.857L7.215 8.613l.306-2.172.036-.255.738.108 6.291.927 9.81 1.449 2.121.312 1.02.15-.441 3.099z"
      fill="currentColor"
    />
    <path
      d="M11.76 13.47c1.068.156 2.058-.6 2.211-1.689.153-1.092-.585-2.103-1.653-2.259-1.068-.159-2.058.6-2.211 1.689-.156 1.089.585 2.103 1.653 2.259zm11.43 1.392l-1.851 1.962-2.337-4.704-4.437 5.211s-5.832-2.4-7.437 1.764l15.057 2.22 2.226.327-.129-.723-1.092-6.057z"
      fill="currentColor"
    />
  </svg>
);

ImageIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ImageIcon;