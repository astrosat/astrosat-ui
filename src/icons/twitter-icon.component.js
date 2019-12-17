import React from 'react';
import PropTypes from 'prop-types';

const TwitterIcon = ({ classes }) => {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
    >
      <path
        fill="currentColor"
        d="M30 0a5 5 0 015 5v24.107a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h25zm-8.965 9.46c-2.35 0-4.077 2.37-3.546 4.831-3.026-.163-5.708-1.73-7.504-4.112-.953 1.77-.494 4.084 1.128 5.255a3.417 3.417 0 01-1.65-.493c-.04 1.824 1.17 3.53 2.92 3.91a3.394 3.394 0 01-1.644.067c.463 1.564 1.808 2.7 3.401 2.733-1.53 1.297-3.458 1.876-5.39 1.63 1.61 1.116 3.524 1.768 5.58 1.768 6.76 0 10.578-6.172 10.348-11.707a7.743 7.743 0 001.816-2.038 6.84 6.84 0 01-2.09.62 3.902 3.902 0 001.6-2.178 6.98 6.98 0 01-2.312.956c-.664-.765-1.61-1.243-2.657-1.243z"
      />
    </svg>
  );
};

TwitterIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default TwitterIcon;
