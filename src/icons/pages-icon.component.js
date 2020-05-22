import React from 'react';
import PropTypes from 'prop-types';

const PagesIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.416 28.35H4.928a.276.276 0 01-.276-.275V1.928c0-.152.124-.276.276-.276h15.167l.053.057v4.959c0 .628.508 1.137 1.135 1.137h4.408v20.27a.277.277 0 01-.275.274zm1.71-21.472L21.069.267a.824.824 0 00-.609-.268H4.928A1.93 1.93 0 003 1.928v26.147A1.93 1.93 0 004.928 30h20.488a1.93 1.93 0 001.927-1.926V7.435a.825.825 0 00-.217-.558"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M13.72 12.922l.59.342-.28.528-.59-.343.28-.527zm2.61 1.74l.59.342-.28.528-.59-.342.28-.528zm-2.543 1.74l.523.276-.346.594-.524-.276.347-.594z"
      stroke="currentColor"
      strokeWidth=".1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.854 19.973a.264.264 0 00.348-.095.236.236 0 00-.1-.33.263.263 0 00-.348.096.239.239 0 00.023.27c.02.025.046.046.075.06h.002zm-.371.637c-.495-.26-.673-.85-.399-1.32.273-.47.896-.64 1.39-.379.493.261.672.852.398 1.32-.273.47-.896.64-1.39.38z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.84 20.343a.362.362 0 01.264-.45.386.386 0 01.474.248c.106.354.356.653.696.83.337.178.736.222 1.106.12a.387.387 0 01.474.25.362.362 0 01-.262.45 2.32 2.32 0 01-1.692-.182 2.132 2.132 0 01-1.06-1.267v.001z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.736 20.643a.362.362 0 01.263-.45.386.386 0 01.474.25c.19.632.637 1.165 1.242 1.483.61.32 1.32.397 1.984.215a.387.387 0 01.473.25.362.362 0 01-.263.45 3.522 3.522 0 01-2.566-.278 3.23 3.23 0 01-1.607-1.92zm.409-11.151l4.585 2.414a.234.234 0 01.13.24.236.236 0 01-.031.09l-1.21 2.073a.263.263 0 01-.347.094l-4.585-2.415a.236.236 0 01-.099-.33l1.21-2.072a.263.263 0 01.347-.095zm-.125.212l-1.208 2.072 4.585 2.415 1.21-2.073L9.02 9.704z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.145 9.492l4.585 2.414a.234.234 0 01.13.24.236.236 0 01-.031.09l-1.21 2.073a.263.263 0 01-.347.094l-4.585-2.415a.236.236 0 01-.099-.33l1.21-2.072a.263.263 0 01.347-.095zm-.125.212l-1.208 2.072 4.585 2.415 1.21-2.073L9.02 9.704zm9.063 4.495l4.585 2.415a.236.236 0 01.1.33l-1.21 2.072a.262.262 0 01-.347.094l-4.584-2.414a.238.238 0 01-.13-.24.234.234 0 01.03-.09l1.209-2.073a.263.263 0 01.347-.094zm-.123.213l-1.21 2.072 4.585 2.414 1.21-2.072-4.586-2.415z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.083 14.2l4.585 2.414a.234.234 0 01.1.33l-1.21 2.072a.262.262 0 01-.347.094l-4.584-2.414a.237.237 0 01-.1-.33l1.209-2.073a.263.263 0 01.347-.094zm-.123.212l-1.21 2.072 4.585 2.414 1.21-2.072-4.585-2.415zm-1.14-2.928c.665.349.905 1.144.537 1.775l-1.715 2.94a.322.322 0 01-.426.116l-1.857-.978a.29.29 0 01-.122-.405l1.715-2.94c.368-.63 1.205-.858 1.869-.508zm-2.952 5.062c1.07.562 1.315 1.34.737 2.329L11.4 17.187c.577-.99 1.4-1.204 2.468-.641z"
      fill="currentColor"
    />
  </svg>
);

PagesIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default PagesIcon;
