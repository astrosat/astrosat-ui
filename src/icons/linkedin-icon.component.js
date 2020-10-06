import React from 'react';
import PropTypes from 'prop-types';

const LinkedinIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M20.571 0c.91 0 1.782.37 2.425 1.03A3.566 3.566 0 0124 3.518v16.964c0 .933-.361 1.828-1.004 2.488A3.385 3.385 0 0120.57 24H3.43c-.91 0-1.782-.37-2.425-1.03A3.566 3.566 0 010 20.482V3.518c0-.933.361-1.828 1.004-2.487A3.385 3.385 0 013.43 0H20.57zM8.604 9.844H6.24v8.469h2.363v-8.47zm6.078-.259c-1.619 0-2.3 1.4-2.3 1.4v-1.14h-2.267v8.468h2.266v-4.446c0-1.19.494-1.9 1.44-1.9.87 0 1.287.68 1.287 1.9v4.446h2.352v-5.362c0-2.27-1.16-3.366-2.778-3.366zm-7.27-3.977c-.773 0-1.398.7-1.398 1.562 0 .864.625 1.564 1.397 1.564s1.398-.7 1.398-1.564c0-.862-.626-1.562-1.398-1.562z"
      fill="currentColor"
    />
  </svg>
);

LinkedinIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default LinkedinIcon;
