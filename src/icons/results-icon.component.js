import React from 'react';
import PropTypes from 'prop-types';

const ResultsIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.692 4.15a4.15 4.15 0 11-8.299 0 4.15 4.15 0 018.299 0zm-1.41-2.054a.262.262 0 01.086.062.293.293 0 010 .4l-2.19 2.293-1.232 1.29a.26.26 0 01-.381 0l-1.433-1.5a.292.292 0 010-.4.262.262 0 01.381 0l1.243 1.301 1.049-1.099 2.182-2.285a.261.261 0 01.295-.062z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.052 22.756h15.43a.208.208 0 00.207-.207V7.284h-3.32a.855.855 0 01-.855-.856V2.693l-.04-.042H3.052a.208.208 0 00-.208.208v19.69a.208.208 0 00.208.207zM18.179 4.85l1.59 1.737v-.001a.621.621 0 01.164.42V22.55A1.453 1.453 0 0118.48 24H3.051c-.8 0-1.451-.651-1.451-1.45V2.858a1.453 1.453 0 011.452-1.453h11.696a.621.621 0 01.459.202l2.598 2.835-1.05 1.1-1.242-1.302a.261.261 0 00-.38 0 .292.292 0 000 .4l1.432 1.5a.26.26 0 00.381 0l1.233-1.29z"
      fill="currentColor"
    />
    <path
      d="M2.255 19.655h13.759H2.255zM2.583 5.57H11.1 2.583zm-.328 2.948h8.518-8.518zm0 3.276h5.897-5.897zm0 2.621h13.759H2.255zm0 2.62h10.483H2.255z"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
);

ResultsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ResultsIcon;
