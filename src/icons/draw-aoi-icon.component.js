import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const DrawAoiIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M23.25 6c.413 0 .75-.336.75-.75V.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v1.5H6V.75A.75.75 0 0 0 5.25 0H.75A.75.75 0 0 0 0 .75v4.5c0 .414.337.75.75.75h1.5v12H.75a.75.75 0 0 0-.75.75v4.5c0 .413.337.75.75.75h4.5c.414 0 .75-.337.75-.75v-1.5h12v1.5c0 .413.336.75.75.75h4.5c.413 0 .75-.337.75-.75v-4.5a.75.75 0 0 0-.75-.75h-1.5V6h1.5ZM19.5 1.502H22.5V4.5H19.5V1.5Zm-17.999 0H4.5V4.5H1.5V1.5ZM4.5 22.5H1.5V19.5H4.5V22.5Zm17.999 0H19.5V19.5H22.5V22.5Zm-2.25-4.5h-1.5a.75.75 0 0 0-.75.75v1.5H6.001v-1.5a.75.75 0 0 0-.75-.75h-1.5V6.001h1.5c.413 0 .75-.337.75-.75v-1.5h11.998v1.5c0 .413.337.75.75.75h1.5v11.998Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default DrawAoiIcon;
