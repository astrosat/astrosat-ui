import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const TriangleIcon = props => (
  <SvgIcon {...props}>
    <path d="M12 .8l11.778 20.4H.222L12 .8z" fill="currentColor" />
  </SvgIcon>
);

export default TriangleIcon;
