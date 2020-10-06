import React from 'react';
import PropTypes from 'prop-types';

const FaqIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      d="M3.477 23.307v-1.79h-.542C1.44 21.516.4 20.576.4 19.591V12.79h0c0-.988 1.045-1.934 2.534-1.934h.4v-.001h9.732c1.488 0 2.535.947 2.535 1.935v6.801c0 .986-1.044 1.925-2.535 1.925H7.162c-.241 0-.422 0-.57.03-.172.037-.294.114-.407.184l-.024.015h0c-.125.08-.94.552-1.736 1.013l-.948.548z"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.015 0h13.173C22.292 0 24.003 1.336 24 2.983v8.69c0 1.647-1.705 2.97-3.814 2.97H20v2.662s-3.94-2.233-4.284-2.445l-.011-.006c-.336-.206-.343-.21-1.055-.21H7.015c-2.105 0-3.816-1.322-3.816-2.97v-8.69C3.2 1.335 4.91 0 7.015 0zm12.651 8.736c.244-.39.365-.88.365-1.468 0-.737-.19-1.315-.572-1.734-.381-.419-.912-.628-1.59-.628-.699 0-1.238.206-1.617.619-.38.41-.569.99-.569 1.737 0 .754.189 1.338.566 1.753.38.413.917.62 1.613.62l.178-.007.921 1.037h.799l-1.125-1.138a1.813 1.813 0 001.031-.791zm-3.4-1.468c0 .622.135 1.095.407 1.417.273.32.67.481 1.19.481.523 0 .918-.16 1.186-.48.267-.321.4-.794.4-1.418 0-.618-.133-1.086-.4-1.404-.266-.32-.659-.48-1.18-.48-.524 0-.923.16-1.197.483-.271.32-.407.788-.407 1.401zM14.71 9.571l-.588-1.46h-1.895l-.582 1.46h-.556l1.869-4.612h.462l1.86 4.612h-.57zm-1.309-3.365l.55 1.424h-1.53l.556-1.424c.089-.24.157-.461.204-.663.076.262.149.483.22.663zM8.319 9.571h.55V7.608h1.959v-.475h-1.96v-1.68h2.086v-.475H8.319V9.57z"
      fill="currentColor"
    />
  </svg>
);

FaqIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FaqIcon;
