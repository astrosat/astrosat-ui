import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const DrawRectangleIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4.993l22 .158V19H1V4.993zm2 2.014V17h18V7.137l-18-.13z"
      fill="currentColor"
    />
    <path
      d="M2 8a2 2 0 100-4 2 2 0 000 4zM2 20a2 2 0 100-4 2 2 0 000 4zM22 8a2 2 0 100-4 2 2 0 000 4zM22 20a2 2 0 100-4 2 2 0 000 4z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default DrawRectangleIcon;
