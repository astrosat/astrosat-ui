import React from 'react';
import PropTypes from 'prop-types';

const DrawAoiIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M29.062 7.501A.94.94 0 0030 6.563V.938A.938.938 0 0029.062 0h-5.625a.938.938 0 00-.938.938v1.874H7.5V.938A.938.938 0 006.563 0H.938A.938.938 0 000 .938v5.625c0 .517.42.938.938.938h1.874V22.5H.938a.938.938 0 00-.938.938v5.625c0 .517.42.938.938.938h5.625a.94.94 0 00.938-.938v-1.874H22.5v1.874c0 .517.42.938.938.938h5.625c.517 0 .938-.42.938-.938v-5.625a.938.938 0 00-.938-.938h-1.874V7.5h1.874zm-4.687-5.625h3.749v3.749h-3.749V1.876zm-22.499 0h3.749v3.749H1.876V1.876zm3.749 26.248H1.876v-3.749h3.749v3.749zm22.499 0h-3.749v-3.749h3.749v3.749zm-2.813-5.625h-1.874a.938.938 0 00-.938.938v1.874H7.5v-1.874a.938.938 0 00-.938-.938H4.689V7.5h1.874a.94.94 0 00.938-.938V4.689H22.5v1.874c0 .517.42.938.938.938h1.874V22.5z"
      fill="currentColor"
    />
  </svg>
);

DrawAoiIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default DrawAoiIcon;
