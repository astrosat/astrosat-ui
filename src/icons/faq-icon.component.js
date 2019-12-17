import React from 'react';
import PropTypes from 'prop-types';

const FaqIcon = ({ classes }) => (
  <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        stroke="currentColor"
        d="M13.549 22.58h12.256c1.958 0 3.55 1.345 3.55 3.003v8.748c0 1.658-1.592 2.99-3.55 2.99H18.7c-.67 0-.67.004-.991.217-.321.214-3.987 2.462-3.987 2.462v-2.68h-.172c-1.964 0-3.55-1.332-3.55-2.99v-8.747c-.001-1.658 1.59-3.002 3.549-3.002z"
      />
      <path
        fill="currentColor"
        fill-rule="nonzero"
        d="M34.42 10H18.485c-2.546 0-4.615 1.718-4.615 3.837v11.177c0 2.12 2.069 3.82 4.615 3.82h9.236c.87 0 .87.006 1.289.279.417.272 5.183 3.145 5.183 3.145v-3.425h.224c2.552 0 4.614-1.701 4.614-3.82V13.837C39.034 11.718 36.965 10 34.42 10z"
      />
      <text
        fill="#FFF"
        font-family="OpenSans-Bold, Open Sans"
        font-size="8"
        font-weight="bold"
        transform="translate(13.871 10)"
      >
        <tspan x="5.129" y="12">
          FAQ
        </tspan>
      </text>
    </g>
  </svg>
);

FaqIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default FaqIcon;
