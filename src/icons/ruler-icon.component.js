import React from 'react';
import PropTypes from 'prop-types';

const RulerIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      clipRule="evenodd"
      d="M17.245 1H11.95c-.483 0-.951.392-.951.875v26.25c0 .483.468.875.951.875h5.294c.483 0 .755-.392.755-.875V1.875c0-.483-.271-.875-.755-.875z"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2.75h2.625v.875H11V2.75zM11 8h2.625v.875H11V8zm0-2.625h2.625v.875H11v-.875zm0 5.25h2.625v.875H11v-.875zm0 2.625h2.625v.875H11v-.875zm0 2.625h2.625v.875H11v-.875zm0 2.625h2.625v.875H11V18.5zm0 2.625h2.625V22H11v-.875zm0 2.625h2.625v.875H11v-.875zm0 2.625h2.625v.875H11v-.875z"
      fill="currentColor"
    />
  </svg>
);

RulerIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default RulerIcon;
