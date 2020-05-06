import React from 'react';
import PropTypes from 'prop-types';

const ContactIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M26.4 5A3.6 3.6 0 0130 8.6v12a3.6 3.6 0 01-3.6 3.6H3.6A3.6 3.6 0 010 20.6v-12A3.6 3.6 0 013.6 5h22.8zM9.972 15.342l-5.854 6.453a.6.6 0 00.03.832.561.561 0 00.807-.029l5.853-6.457a.6.6 0 00-.051-.807.559.559 0 00-.785.008zm8.983-.03a.6.6 0 00-.027.831l5.85 6.455a.56.56 0 00.808.029.6.6 0 00.03-.832l-5.853-6.453a.56.56 0 00-.808-.03zm6.252-8.427l-9.552 7.457a.754.754 0 01-.906 0L5.203 6.884a.56.56 0 00-.801.113.6.6 0 00.11.824l9.548 7.457a1.88 1.88 0 002.285 0l9.552-7.457a.6.6 0 00-.055-.976.56.56 0 00-.636.039l.001.001z"
      fill="currentColor"
    />
  </svg>
);

ContactIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ContactIcon;
