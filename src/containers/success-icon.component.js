import React from 'react';
import PropTypes from 'prop-types';

const SuccessIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >
    <g>
      <circle cx="12.5" cy="12.5" r="11.667" />
      <path
        fill="#fff"
        d="M20.445 6.9a.734.734 0 00-1.073 0l-9.085 9.516-3.492-3.658a.734.734 0 00-1.073 0 .821.821 0 000 1.123l4.029 4.22c.296.31.776.31 1.072 0l9.622-10.078a.821.821 0 000-1.124z"
      />
    </g>
  </svg>
);

SuccessIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default SuccessIcon;
