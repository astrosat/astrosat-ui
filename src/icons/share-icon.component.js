import React from 'react';
import PropTypes from 'prop-types';

const shareIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <g fill="currentColor">
      <path d="M17.75 28.027v-2.38l14.583 7.866-.882 1.904-13.701-7.39zm0-3.675v-2.38l13.701-7.389.882 1.904-14.583 7.865z" />
      <path d="M35.458 10.417a5.208 5.208 0 110 10.416 5.208 5.208 0 010-10.416zm0 2.083a3.125 3.125 0 100 6.25 3.125 3.125 0 000-6.25zm0 16.667a5.208 5.208 0 110 10.416 5.208 5.208 0 010-10.416zm0 2.083a3.125 3.125 0 100 6.25 3.125 3.125 0 000-6.25zM14.625 19.792a5.208 5.208 0 110 10.416 5.208 5.208 0 010-10.416zm0 2.083a3.125 3.125 0 100 6.25 3.125 3.125 0 000-6.25z" />
    </g>
  </svg>
);

shareIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default shareIcon;
