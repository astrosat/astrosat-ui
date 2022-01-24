import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const TriangleIcon = props => (
  <SvgIcon {...props}>
    <path d="m12 .8 11.778 20.4H.222L12 .8Z" fill="currentColor" />
  </SvgIcon>
);

export default TriangleIcon;
