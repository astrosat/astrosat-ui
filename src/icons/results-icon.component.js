import React from 'react';
import PropTypes from 'prop-types';

const ResultsIcon = ({ classes, ...rest }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.115 5.187a5.187 5.187 0 11-10.374 0 5.187 5.187 0 0110.374 0zM25.352 2.62a.327.327 0 01.108.076.365.365 0 010 .5l-2.737 2.866-1.54 1.613a.325.325 0 01-.477 0l-1.79-1.875a.365.365 0 010-.5.327.327 0 01.476 0l1.553 1.627 1.311-1.374 2.728-2.857a.327.327 0 01.368-.076z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.815 28.446h19.287a.26.26 0 00.259-.26V9.107h-4.15a1.07 1.07 0 01-1.069-1.071V3.367l-.05-.053H3.816a.26.26 0 00-.26.26v24.613a.26.26 0 00.26.259zM22.723 6.063l1.989 2.17a.776.776 0 01.204.525v19.429A1.817 1.817 0 0123.102 30H3.815C2.815 30 2 29.186 2 28.187V3.573a1.817 1.817 0 011.815-1.815h14.62a.777.777 0 01.574.252l3.247 3.544-1.311 1.374L19.392 5.3a.326.326 0 00-.477 0 .365.365 0 000 .5l1.791 1.875c.131.14.345.139.477 0l1.54-1.613z"
      fill="currentColor"
    />
    <path
      d="M2.819 24.57h17.198M3.228 6.96h10.647H3.228zm-.409 3.686h10.647H2.819zm0 4.095h7.37-7.37zm0 3.275h17.198H2.82zm0 3.276h13.104H2.819z"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
);

ResultsIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default ResultsIcon;
