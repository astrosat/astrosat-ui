import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const ShareIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M6.4 14.325v-1.828l11.2 6.041-.677 1.463L6.4 14.325zm0-2.823V9.674L16.923 4l.677 1.462-11.2 6.04z"
      fill="currentColor"
    />
    <path
      d="M20 .8a4 4 0 110 8 4 4 0 010-8zm0 1.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm0 12.8a4 4 0 110 8 4 4 0 010-8zm0 1.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zM4 8a4 4 0 110 8 4 4 0 010-8zm0 1.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ShareIcon;
