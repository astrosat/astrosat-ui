import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const DrawRectangleIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1 4.993 22 .158V19H1V4.993Zm2 2.014V17h18V7.137l-18-.13Z"
      fill="currentColor"
    />
    <path
      d="M2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default DrawRectangleIcon;
