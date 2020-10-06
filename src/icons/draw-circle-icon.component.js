import React from 'react';
import PropTypes from 'prop-types';

const DrawCircleIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M23.249 9H21.71A7.511 7.511 0 0015 2.289V.75a.75.75 0 00-.75-.75H9.75A.75.75 0 009 .75v1.538A7.511 7.511 0 002.289 9H.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h1.538A7.512 7.512 0 009 21.711v1.539c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-1.538A7.512 7.512 0 0021.711 15h1.539a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75L23.249 9zm-12.75-7.5h3v3h-3v-3zm-9 9h3v3h-3v-3zm12 12h-3v-3h3v3zm1.5-2.302V18.75a.75.75 0 00-.75-.749H9.75a.75.75 0 00-.75.75v1.448A6.006 6.006 0 013.802 15H5.25a.75.75 0 00.75-.75V9.75a.75.75 0 00-.751-.75H3.802A6.006 6.006 0 019 3.803v1.449c0 .413.336.749.75.749h4.5a.75.75 0 00.75-.75V3.803A6.005 6.005 0 0120.198 9H18.75a.75.75 0 00-.749.75v4.5c0 .414.336.75.75.75h1.448A6.006 6.006 0 0115 20.199zm7.5-6.697h-3v-3h3v3z"
      fill="currentColor"
    />
  </svg>
);

DrawCircleIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default DrawCircleIcon;
