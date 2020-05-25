import React from 'react';
import PropTypes from 'prop-types';

const DrawCircleIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M29.061 11.25H27.14a9.389 9.389 0 00-8.39-8.389V.938A.938.938 0 0017.81 0h-5.623a.938.938 0 00-.938.938V2.86a9.389 9.389 0 00-8.389 8.39H.938a.938.938 0 00-.938.938v5.624c0 .518.42.938.938.938H2.86a9.39 9.39 0 008.39 8.389v1.923c0 .518.42.938.938.938h5.624a.938.938 0 00.938-.938V27.14a9.39 9.39 0 008.389-8.39h1.923a.938.938 0 00.938-.938V12.19a.938.938 0 00-.938-.938v-.001zM13.124 1.874h3.75v3.752h-3.75V1.874zM1.874 13.126h3.75v3.75h-3.75v-3.75zm15 15h-3.75v-3.752h3.75v3.752zm1.875-2.878v-1.811a.938.938 0 00-.938-.937h-5.623a.938.938 0 00-.938.938v1.81a7.508 7.508 0 01-6.498-6.498h1.811a.938.938 0 00.937-.938V12.19a.938.938 0 00-.938-.938h-1.81a7.508 7.508 0 016.498-6.498v1.811c0 .517.42.937.938.937h5.624a.938.938 0 00.938-.938v-1.81a7.506 7.506 0 016.498 6.498h-1.811a.938.938 0 00-.937.938v5.624c0 .518.42.938.938.938h1.81a7.507 7.507 0 01-6.498 6.498l-.001-.001zm9.376-8.372h-3.752v-3.75h3.752v3.75z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

DrawCircleIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default DrawCircleIcon;
