import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const OrbIcon = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="12" fill="currentColor" />
  </SvgIcon>
);

export default OrbIcon;
