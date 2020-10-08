import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const LineWidth3pxIcon = props => (
  <SvgIcon {...props}>
    <path d="M0 12h24" stroke="currentColor" strokeWidth="3" />
  </SvgIcon>
);

export default LineWidth3pxIcon;
