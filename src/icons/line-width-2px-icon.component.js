import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const LineWidth2pxIcon = props => (
  <SvgIcon {...props}>
    <path d="M0 12h24" stroke="currentColor" strokeWidth="2" />
  </SvgIcon>
);

export default LineWidth2pxIcon;
