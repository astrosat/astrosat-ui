import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const PolygonIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.805 1.741l9.043 8.864-7.48 11.032H7.941L.064 12.889l14.74-11.148zM1.536 13.03l6.851 7.607h7.45l6.715-9.902-7.832-7.676-13.184 9.97z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default PolygonIcon;
