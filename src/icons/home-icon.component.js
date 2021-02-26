import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const HomeIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M12 1l12 11.302-1.302 1.226L12 3.453 1.303 13.529 0 12.302 12 1zM2.837 23.88V15.1L12 6.47l9.163 8.628v8.781H2.837z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default HomeIcon;
