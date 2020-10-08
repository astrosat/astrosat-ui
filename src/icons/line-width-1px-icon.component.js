import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const LineWidth1pxIcon = props => (
  <SvgIcon {...props}>
    <path d="M0 12h24" stroke="currentColor" />
  </SvgIcon>
);

export default LineWidth1pxIcon;
