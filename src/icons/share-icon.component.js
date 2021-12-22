import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const ShareIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M6.4 14.325v-1.828l11.2 6.041-.677 1.463L6.4 14.325Zm0-2.823V9.674L16.923 4l.677 1.462-11.2 6.04Z"
      fill="currentColor"
    />
    <path
      d="M20 .8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm0 12.8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8ZM4 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ShareIcon;
