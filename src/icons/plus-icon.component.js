import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const PlusIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M12 0c-1.662 0-3 1.338-3 3v6H3c-1.662 0-3 1.338-3 3s1.338 3 3 3h6v6c0 1.662 1.338 3 3 3s3-1.338 3-3v-6h6c1.662 0 3-1.338 3-3s-1.338-3-3-3h-6V3c0-1.662-1.338-3-3-3Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default PlusIcon;
