import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const CloseIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M.657 3.969L20.03 23.344c.892.891 2.358.872 3.271-.042.915-.915.934-2.38.042-3.271L3.97.656C3.078-.234 1.612-.216.699.698c-.915.914-.934 2.38-.042 3.27z"
      fill="currentColor"
    />
    <path
      d="M3.97 23.343L23.343 3.97c.891-.892.872-2.358-.042-3.271-.915-.915-2.38-.934-3.271-.042L.656 20.03c-.891.892-.872 2.358.042 3.271.915.915 2.38.934 3.271.042z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default CloseIcon;
