import React from 'react';
import PropTypes from 'prop-types';

const RulerIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      clipRule="evenodd"
      d="M13.796.8H9.56c-.387 0-.761.314-.761.7v21c0 .386.374.7.76.7h4.236c.386 0 .604-.314.604-.7v-21c0-.386-.217-.7-.604-.7z"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.8 2.2h2.1v.7H8.8v-.7zm0 4.2h2.1v.7H8.8v-.7zm0-2.1h2.1V5H8.8v-.7zm0 4.2h2.1v.7H8.8v-.7zm0 2.1h2.1v.7H8.8v-.7zm0 2.1h2.1v.7H8.8v-.7zm0 2.1h2.1v.7H8.8v-.7zm0 2.1h2.1v.7H8.8v-.7zm0 2.1h2.1v.7H8.8V19zm0 2.1h2.1v.7H8.8v-.7z"
      fill="currentColor"
    />
  </svg>
);

RulerIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default RulerIcon;
