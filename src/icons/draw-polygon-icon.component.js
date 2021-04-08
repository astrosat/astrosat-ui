import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const DrawPolygonIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.171 1.09l12.98 6.214-1.893 13.079-14.103 3.023-7.11-12.19L10.17 1.089zm.414 2.415L2.549 11.54l5.604 9.606 11.325-2.427 1.483-10.247-10.376-4.967z"
      fill="currentColor"
    />
    <path
      d="M10.081 3.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 12.581a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8.357 23.478a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21.481 8.949a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20.07 20.754a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fill="currentColor"
      stroke="currentColor"
    />
  </SvgIcon>
);

export default DrawPolygonIcon;
