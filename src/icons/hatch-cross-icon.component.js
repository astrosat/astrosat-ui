import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const HatchCrossIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm10 12C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Z"
      fill="currentColor"
    />
    <path
      d="M6.646 21.203 21.5 6M2.646 18.203 18.203 2.646M22.203 18.028 7 3.175M18.203 21.91 2.646 6.354M12.314 22.92 1 11.607m21.92.707L11.607 1M1.04 12.354 12.354 1.04m-.707 21.92L22.96 11.646"
      stroke="currentColor"
    />
  </SvgIcon>
);

export default HatchCrossIcon;
