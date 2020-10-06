import React from 'react';
import PropTypes from 'prop-types';

const AnnotationsIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      clipRule="evenodd"
      d="M11.392 15.123l-4.605 4.604-.21.21-3.694 1.298a.107.107 0 01-.108-.026.105.105 0 01-.025-.108l1.297-3.693 4.743-4.742 2.602 2.457zm1.184-6.243l6.56-6.56a1.32 1.32 0 011.867 0l.662.663a1.32 1.32 0 010 1.866l-6.567 6.569-2.522-2.538zM3.504 20.77l-.462-.461.462.462z"
      stroke="currentColor"
      strokeWidth="1.652"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M4.118 17.422l1.737.64.634 1.698-2.37-2.338zM23.2 19.577L19.577 23.2.8 4.423 4.423.8 23.2 19.577zM2.714 6.337l1.208-1.206-1.208 1.207z"
      stroke="currentColor"
      strokeWidth="1.652"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M4.572 8.196l1.975-1.974-1.975 1.974zm1.859 1.858l1.207-1.207-1.207 1.207zm1.858 1.858l1.208-1.207-1.208 1.207zm3.716 3.716l1.208-1.207-1.208 1.207zm1.858 1.858l1.208-1.207-1.208 1.207zm1.858 1.858l1.975-1.974-1.975 1.974zm-5.585-5.584l1.974-1.974-1.974 1.974h0zm7.443 7.443l1.208-1.208-1.208 1.207zm3.61-16.011L18.78 2.784l2.407 2.407h0z"
      stroke="currentColor"
      strokeWidth="1.652"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

AnnotationsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default AnnotationsIcon;
