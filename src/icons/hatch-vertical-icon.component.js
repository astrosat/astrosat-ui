import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const HatchVerticalIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z"
      fill="currentColor"
    />
    <path stroke="currentColor" d="M9.5 1v22M14.5 1v22M19.5 4v16M4.5 4v16" />
  </SvgIcon>
);

export default HatchVerticalIcon;
