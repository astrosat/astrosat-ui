import React from 'react';
import PropTypes from 'prop-types';

const AnnotationsIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.652"
    >
      <path d="M24.35 28.952l-6.046 6.045-.276.276-4.85 1.704a.138.138 0 01-.175-.175l1.703-4.85 6.227-6.227m4.971-4.972l8.614-8.614a1.733 1.733 0 012.45 0l.87.871a1.732 1.732 0 010 2.45l-8.623 8.626M13.993 36.368l-.607-.607.607.607z" />
      <path d="M14.8 31.97l2.28.84.833 2.231m21.94-.241l-4.757 4.758L10.443 14.9l4.757-4.757zM12.956 17.415l1.586-1.585-1.586 1.585z" />
      <path d="M15.396 19.855l2.592-2.592-2.592 2.592zm2.44 2.44l1.585-1.585-1.585 1.585zm2.439 2.44l1.586-1.585-1.586 1.585zm4.879 4.88l1.586-1.586-1.586 1.586zm2.44 2.44l1.586-1.586-1.586 1.586zm2.44 2.44l2.592-2.593-2.592 2.593zM22.7 27.162l2.593-2.592-2.592 2.592zm9.773 9.773l1.586-1.586-1.586 1.586zm4.739-21.025l-3.161-3.161 3.16 3.16z" />
    </g>
  </svg>
);

AnnotationsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default AnnotationsIcon;
