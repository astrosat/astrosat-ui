import React from 'react';
import PropTypes from 'prop-types';

const DataIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M6.397 12.414H4.818a.795.795 0 00-.79.8v7.503c0 .442.354.8.79.8h1.579c.436 0 .79-.358.79-.8v-7.503c0-.442-.354-.8-.79-.8zM12.713 6.62h-1.58a.795.795 0 00-.789.8v13.298c0 .441.354.8.79.8h1.579c.436 0 .789-.359.789-.8V7.42c0-.442-.354-.8-.79-.8zM19.028 0H17.45a.795.795 0 00-.79.8v19.918c0 .441.354.8.79.8h1.58c.435 0 .788-.359.788-.8V.8c0-.442-.353-.8-.789-.8z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 24H1c-.552 0-1-.184-1-.414 0-.228.448-.413 1-.413h22c.552 0 1 .185 1 .413 0 .23-.448.414-1 .414z"
      fill="currentColor"
    />
  </svg>
);

DataIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default DataIcon;
