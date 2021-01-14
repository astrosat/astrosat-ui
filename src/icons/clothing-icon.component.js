import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const ClothingIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M21.168 1.905C20.298 1.143 15.317 0 15.317 0c0 .762-.78 2.286-3.317 2.286C9.465 2.286 8.684.762 8.684 0c0 0-4.982 1.143-5.852 1.905C2.153 2.5.636 6.106 0 7.665l.011.004 3.913 2.27L4.783 8V23.62c0 .21.175.381.39.381h13.654c.215 0 .39-.172.39-.381V8l.858 1.939L24 7.665c-.635-1.559-2.152-5.165-2.832-5.76z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ClothingIcon;
