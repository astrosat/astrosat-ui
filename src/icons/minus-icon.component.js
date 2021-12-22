import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const MinusIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M3 8.8c-1.662 0-3 1.338-3 3s1.338 3 3 3h18c1.662 0 3-1.338 3-3s-1.338-3-3-3H3Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default MinusIcon;
