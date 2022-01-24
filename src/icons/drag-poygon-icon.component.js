import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const DragPoygonIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.212 2.75 8.167 8.273.59 10.735-14.986.026L.64 13.358 14.212 2.75ZM3.534 13.635l5.357 6.148 11.966-.02-.434-7.873-6.383-6.466-10.506 8.211Z"
      fill="currentColor"
    />
    <path
      d="M14.609 5.174a1.087 1.087 0 1 0 0-2.174 1.087 1.087 0 0 0 0 2.174ZM2.087 14.565a1.087 1.087 0 1 0 0-2.174 1.087 1.087 0 0 0 0 2.174ZM8.348 21.87a1.087 1.087 0 1 0 0-2.174 1.087 1.087 0 0 0 0 2.174ZM21.913 21.87a1.087 1.087 0 1 0 0-2.174 1.087 1.087 0 0 0 0 2.174ZM21.913 12.478a1.087 1.087 0 1 0 0-2.174 1.087 1.087 0 0 0 0 2.174Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    />
  </SvgIcon>
);

export default DragPoygonIcon;
