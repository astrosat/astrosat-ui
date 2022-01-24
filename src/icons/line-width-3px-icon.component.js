import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const LineWidth3pxIcon = props => (
  <SvgIcon {...props}>
    <path d="M0 12h24" stroke="currentColor" strokeWidth="3" />
  </SvgIcon>
);

export default LineWidth3pxIcon;
