import React from 'react';
import PropTypes from 'prop-types';

const EyeAltIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M.268 12.734c1.566 1.963 6.227 7.198 11.74 7.198 5.512 0 10.173-5.235 11.74-7.198a1.19 1.19 0 000-1.468c-1.567-1.963-6.228-7.198-11.74-7.198-5.513-.02-10.174 5.215-11.74 7.179a1.166 1.166 0 000 1.487zm11.74-5.513a4.748 4.748 0 014.759 4.76 4.748 4.748 0 01-4.76 4.759 4.748 4.748 0 01-4.759-4.76 4.748 4.748 0 014.76-4.76z"
      fill="currentColor"
    />
    <path
      d="M12.007 14.36a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z"
      fill="currentColor"
    />
  </svg>
);

EyeAltIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default EyeAltIcon;
