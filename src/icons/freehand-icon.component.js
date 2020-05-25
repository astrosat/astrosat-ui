import React from 'react';
import PropTypes from 'prop-types';

const FreehandIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.397 5.376L13.97 24.814 9.534 22.09 20.96 2.651l4.437 2.725z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.889 5.506l-11.045 18.79-3.803-2.336L21.087 3.17l3.802 2.336z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.116 22.006l3.649 2.241a37.352 37.352 0 01-1.974 1.941c-2.22 2.008-2.702 1.75-2.707 1.748-.004-.002-.45-.315.263-3.25.26-1.07.585-2.113.77-2.68"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.894 28.26c-1.11-.681 1.02-6.819 1.02-6.819l4.437 2.725s-4.348 4.776-5.457 4.094zm.434-.733c.293-.111 1.006-.497 2.455-1.838.475-.442.938-.897 1.39-1.364l-2.85-1.75a39.129 39.129 0 00-.537 1.88c-.493 1.93-.499 2.753-.458 3.072"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.841 3.886l-.76 1.295a1.126 1.126 0 01-.683.517 1.085 1.085 0 01-.84-.128l-1.901-1.169a1.118 1.118 0 01-.506-.697 1.157 1.157 0 01.125-.858l.762-1.296c.152-.258.398-.444.683-.516a1.09 1.09 0 01.84.128l1.9 1.167a1.15 1.15 0 01.38 1.557z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M4 28.631c.809-.826.821-1.558 1.274-1.176.37.317.723.657 1.054 1.018.302.317.78.605 1.068.508.254-.04.488-.163.67-.349.14-.171.29-.33.452-.477a.693.693 0 01.576-.221c.191.03.148-.224.274 0"
      stroke="currentColor"
    />
  </svg>
);

FreehandIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FreehandIcon;
