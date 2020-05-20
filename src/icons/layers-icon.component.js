import React from 'react';
import PropTypes from 'prop-types';

const LayersIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M2.749 8.653v.025l11.483 6.048.011-.004c.328.171.695.278 1.09.278.395 0 .762-.107 1.092-.278l.012.004L27.92 8.678v-.025a1.25 1.25 0 00.747-1.154c0-.523-.313-.969-.76-1.154L16.444.278h-.02A2.34 2.34 0 0015.333 0c-.393 0-.76.107-1.088.278h-.021L2.758 6.345A1.246 1.246 0 002 7.499c0 .52.308.966.749 1.154z"
      fill="currentColor"
    />
    <path
      d="M27.908 13.845l-2.243-1.189a2184.809 2184.809 0 01-8.383 4.41 4.607 4.607 0 01-3.903-.001c-.054-.02-4.856-2.548-8.377-4.409l-2.244 1.19A1.244 1.244 0 002 15.001c0 .52.308.964.749 1.153v.026l11.483 6.048.011-.005c.328.17.695.277 1.09.277.395 0 .762-.106 1.092-.276l.012.004 11.483-6.049v-.025A1.25 1.25 0 0028.667 15c0-.523-.313-.97-.76-1.155z"
      fill="currentColor"
    />
    <path
      d="M27.908 21.345l-2.243-1.188a2206.54 2206.54 0 01-8.383 4.41 4.609 4.609 0 01-3.903-.002 2158.8 2158.8 0 01-8.377-4.408l-2.244 1.188A1.244 1.244 0 002 22.5c0 .52.308.965.749 1.153v.025l11.483 6.048.011-.004c.328.171.695.278 1.09.278.395 0 .762-.107 1.092-.278l.012.004 11.483-6.048v-.025a1.25 1.25 0 00.747-1.153c0-.524-.313-.97-.76-1.155z"
      fill="currentColor"
    />
  </svg>
);

LayersIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LayersIcon;
