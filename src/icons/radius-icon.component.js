import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const RadiusIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-.02 12C-.02 5.362 5.362-.02 12-.02c6.639 0 12.02 5.382 12.02 12.02 0 6.639-5.381 12.02-12.02 12.02C5.362 24.02-.02 18.639-.02 12ZM12 .98C5.914.98.98 5.914.98 12c0 6.086 4.934 11.02 11.02 11.02 6.086 0 11.02-4.934 11.02-11.02C23.02 5.914 18.086.98 12 .98Z"
      fill="currentColor"
    />
    <path
      d="M12 14.56a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.633 11.927H24.02v1H13.633v-1Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default RadiusIcon;
