import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const AwardIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.85 2.502C.85 1.134 1.977.05 3.336.05h16.528c1.36 0 2.486 1.084 2.486 2.452v18.996c0 1.368-1.127 2.452-2.486 2.452H3.336c-1.36 0-2.486-1.084-2.486-2.452V2.502zm2.486-.952c-.559 0-.986.44-.986.952v18.996c0 .512.427.952.986.952h16.528c.558 0 .986-.44.986-.952V2.502c0-.512-.428-.952-.986-.952H3.336z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.172 4.188h9.23v1h-9.23v-1zm-.355 3.134h9.23v1h-9.23v-1zm0 3.482h6.391v1H1.817v-1zm0 2.785h14.912v1H1.817v-1zm0 2.785h11.361v1H1.817v-1zm0 2.786h14.912v1H1.817v-1z"
      fill="currentColor"
    />
    <path
      d="M17.28 7.823c1.57 0 2.841-1.248 2.841-2.786 0-1.539-1.272-2.786-2.84-2.786-1.57 0-2.84 1.247-2.84 2.786 0 1.538 1.27 2.786 2.84 2.786zM15.86 8.958v3.043l1.42-1.393L18.7 12V8.958a4.058 4.058 0 01-2.84 0z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default AwardIcon;
