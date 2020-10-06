import React from 'react';
import PropTypes from 'prop-types';

const LineTypeDashedIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M.24 11.693h2.347v.612H.24v-.612zm3.497 0h2.347v.612H3.737v-.612zm3.497 0H9.58v.612H7.234v-.612zm3.496 0h2.348v.612H10.73v-.612zm3.497 0h2.347v.612h-2.347v-.612zm3.497 0h2.347v.612h-2.347v-.612zm3.775 0h2.261v.612H21.5v-.612z"
      fill="currentColor"
    />
  </svg>
);

LineTypeDashedIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LineTypeDashedIcon;
