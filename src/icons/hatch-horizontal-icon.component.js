import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const HatchHorizontalIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm10 12C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Z"
      fill="currentColor"
    />
    <path stroke="currentColor" d="M1 14.5h22M1 9.5h22M4 4.5h16m-16 15h16" />
  </SvgIcon>
);

export default HatchHorizontalIcon;
