import React from 'react';
import PropTypes from 'prop-types';

const SHOW = 'show';
const HIDE = 'hide';

const ShowHideIcon = ({ classes, type = 'show' }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 51"
  >
    {type === SHOW && (
      <g fill="currentColor" transform="translate(10 18)">
        <circle cx="15.5" cy="8.455" r="4.227" />
        <path d="M15.5 0C5.87 0 0 7.32 0 8.455c0 1.133 5.87 8.454 15.5 8.454 9.63 0 15.5-7.32 15.5-8.454C31 7.32 25.13 0 15.5 0zm0 14.09a5.636 5.636 0 110-11.272 5.636 5.636 0 010 11.273z" />
      </g>
    )}

    {type === HIDE && (
      <g fill="currentColor">
        <path d="M35.588 15.136a.844.844 0 00-1.194 0l-2.87 2.87a18.535 18.535 0 00-6.024-1.004c-9.63 0-15.5 7.32-15.5 8.455 0 .769 2.709 4.376 7.45 6.622l-2.503 2.504a.845.845 0 101.195 1.194l19.446-19.446a.844.844 0 000-1.195zm-15.724 10.32A5.642 5.642 0 0125.5 19.82a5.514 5.514 0 013.189 1.021l-1.022 1.022a4.129 4.129 0 00-2.167-.634 4.232 4.232 0 00-4.227 4.228c.005.767.225 1.518.633 2.167l-1.021 1.022a5.514 5.514 0 01-1.021-3.19zm14.934-5.981l-4.03 4.03c.238.623.363 1.284.368 1.952a5.642 5.642 0 01-5.636 5.636 5.579 5.579 0 01-1.952-.369l-2.608 2.608c1.49.382 3.022.576 4.56.58 9.63 0 15.5-7.321 15.5-8.455 0-.7-2.236-3.745-6.202-5.982z" />
        <path d="M25.5 29.684a4.219 4.219 0 004.144-5.055L24.672 29.6c.273.055.55.083.828.084z" />
      </g>
    )}
  </svg>
);

ShowHideIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ShowHideIcon;