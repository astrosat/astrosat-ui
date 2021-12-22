import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const MagnifierIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.53 17.939a1.411 1.411 0 1 1 1.997-1.996l5.647 5.648a1.41 1.41 0 1 1-1.996 1.996l-5.647-5.648Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.883 19.764C5.425 19.764 1 15.339 1 9.883 1 4.425 5.425 0 10.883 0c5.456 0 9.881 4.425 9.881 9.883 0 5.456-4.425 9.881-9.881 9.881Zm0-2.823a7.059 7.059 0 1 0 0-14.117 7.059 7.059 0 0 0 0 14.117Z"
    />
  </SvgIcon>
);

export default MagnifierIcon;
