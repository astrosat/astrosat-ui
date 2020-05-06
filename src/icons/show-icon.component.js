import React from 'react';
import PropTypes from 'prop-types';

const ShowIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M15 19.032c2.26 0 4.09-1.795 4.09-4.01s-1.83-4.01-4.09-4.01-4.09 1.795-4.09 4.01 1.83 4.01 4.09 4.01z"
      fill="currentColor"
    />
    <path
      d="M15 7C5.68 7 0 13.945 0 15.022c0 1.075 5.68 8.02 15 8.02s15-6.944 15-8.02C30 13.945 24.32 7 15 7zm0 13.368a5.549 5.549 0 01-2.087-.407 5.461 5.461 0 01-1.77-1.16 5.341 5.341 0 01-1.182-1.734 5.257 5.257 0 010-4.092 5.34 5.34 0 011.182-1.735 5.463 5.463 0 011.77-1.16A5.548 5.548 0 0115 9.675a5.51 5.51 0 013.857 1.566 5.295 5.295 0 011.598 3.781 5.295 5.295 0 01-1.598 3.782A5.51 5.51 0 0115 20.369z"
      fill="currentColor"
    />
  </svg>
);

ShowIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ShowIcon;
