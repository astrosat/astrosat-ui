import React from 'react';
import PropTypes from 'prop-types';

const AnnotationsIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      clipRule="evenodd"
      d="M14.24 18.904l-5.756 5.754-.263.263-4.617 1.622a.133.133 0 01-.135-.031.131.131 0 01-.032-.135L5.06 21.76l5.928-5.928 3.253 3.072zm1.48-7.804l8.2-8.2a1.65 1.65 0 012.333 0l.829.83a1.649 1.649 0 010 2.331l-8.21 8.211L15.72 11.1zM4.38 25.964l-.578-.578.578.578z"
      stroke="currentColor"
      strokeWidth="1.652"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M5.148 21.777l2.17.8.794 2.123-2.964-2.923zM29 24.471L24.471 29 1 5.528 5.529 1 29 24.47zM3.393 7.922l1.51-1.509-1.51 1.51z"
      stroke="currentColor"
      strokeWidth="1.652"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M5.716 10.245l2.467-2.468-2.467 2.468v0zm2.323 2.322l1.509-1.508-1.51 1.508zm2.322 2.323l1.51-1.509-1.51 1.509zm4.645 4.645l1.51-1.51-1.51 1.51zm2.323 2.323l1.51-1.51-1.51 1.51zm2.323 2.322l2.467-2.468-2.467 2.468zm-6.983-6.98l2.469-2.467L12.67 17.2h0zm9.305 9.303l1.51-1.51-1.51 1.51zM26.486 6.49l-3.01-3.01 3.009 3.009h0z"
      stroke="currentColor"
      strokeWidth="1.652"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

AnnotationsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default AnnotationsIcon;
