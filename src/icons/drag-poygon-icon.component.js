import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const DragPoygonIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.212 2.75l8.167 8.273.59 10.735-14.986.026L.64 13.358 14.212 2.75zM3.534 13.635l5.357 6.148 11.966-.02-.434-7.873-6.383-6.466-10.506 8.211z"
      fill="currentColor"
    />
    <path
      d="M14.609 5.174a1.087 1.087 0 100-2.174 1.087 1.087 0 000 2.174zM2.087 14.565a1.087 1.087 0 100-2.174 1.087 1.087 0 000 2.174zM8.348 21.87a1.087 1.087 0 100-2.174 1.087 1.087 0 000 2.174zM21.913 21.87a1.087 1.087 0 100-2.174 1.087 1.087 0 000 2.174zM21.913 12.478a1.087 1.087 0 100-2.174 1.087 1.087 0 000 2.174z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    />
  </SvgIcon>
);

export default DragPoygonIcon;
