import React from 'react';
import PropTypes from 'prop-types';

const MapIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M18.848 7.951v19.674M4.56 7.95l6.655 1.375 7.49-1.699 7.38 1.699v19.784l-7.505-1.484-7.365 1.639L4 27.624V7.95h.56v0zm6.59 1.696v19.15-19.15z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.459 10.232c.14-.133 3.403-3.305 3.403-6.597C26.862 1.63 25.164 0 23.077 0s-3.784 1.63-3.784 3.635c0 3.292 3.263 6.464 3.402 6.597a.55.55 0 00.764 0zm-3.085-6.597c0-1.432 1.213-2.597 2.703-2.597 1.49 0 2.703 1.165 2.703 2.597 0 2.241-1.877 4.553-2.703 5.462-.826-.909-2.703-3.22-2.703-5.462z"
      fill="currentColor"
    />
    <path
      d="M24.699 4.038c0-.954-.728-1.73-1.622-1.73-.894 0-1.622.776-1.622 1.73 0 .955.728 1.731 1.622 1.731.894 0 1.622-.776 1.622-1.73v-.001zm-2.162 0c0-.317.242-.576.54-.576.298 0 .54.259.54.576 0 .318-.242.577-.54.577-.298 0-.54-.259-.54-.577z"
      fill="currentColor"
    />
  </svg>
);

MapIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default MapIcon;
