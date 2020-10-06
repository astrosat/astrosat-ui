import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const MapPinIcon = props => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M11.205 22.995a.698.698 0 00.99 0C12.489 22.7 19.4 15.707 19.4 8.5c0-4.246-3.455-7.7-7.7-7.7C7.454.8 4 4.254 4 8.5c0 7.207 6.911 14.2 7.205 14.495z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M11.7 12a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default MapPinIcon;
