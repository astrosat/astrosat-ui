import React from 'react';
import PropTypes from 'prop-types';

const DataIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M7.996 15.517H6.023a.993.993 0 00-.987 1v9.379c0 .552.442 1 .987 1h1.973a.993.993 0 00.987-1v-9.379c0-.552-.442-1-.987-1zM15.89 8.276h-1.973a.993.993 0 00-.987 1v16.621c0 .552.442 1 .987 1h1.974a.993.993 0 00.986-1V9.276c0-.552-.441-1-.986-1zM23.785 0h-1.974a.994.994 0 00-.986 1v24.897c0 .552.442 1 .986 1h1.974a.993.993 0 00.987-1V1c0-.552-.442-1-.987-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.75 30H1.25C.56 30 0 29.77 0 29.483c0-.285.56-.517 1.25-.517h27.5c.69 0 1.25.232 1.25.517 0 .287-.56.517-1.25.517z"
      fill="currentColor"
    />
  </svg>
);

DataIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default DataIcon;
