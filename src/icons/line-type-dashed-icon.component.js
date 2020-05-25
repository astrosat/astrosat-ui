import React from 'react';
import PropTypes from 'prop-types';

const LineTypeDashedIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M.3 14.616h2.934v.765H.3v-.765zm4.371 0h2.934v.765H4.671v-.765zm4.371 0h2.934v.765H9.042v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.371 0h2.934v.765h-2.934v-.765zm4.719 0H29.7v.765h-2.826v-.765z"
      fill="currentColor"
    />
  </svg>
);

LineTypeDashedIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LineTypeDashedIcon;
