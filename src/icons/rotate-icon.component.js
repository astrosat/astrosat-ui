import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const RotateIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M16.056 18.094a6.96 6.96 0 01-4.3 1.413c-.202-.002-1.885-.283-2.029-.331-.07-.024-1.392-.62-1.399-.624a7.508 7.508 0 01-1.67-1.337 51.05 51.05 0 01-.55-.662C5.102 15.21 4.361 13.26 4.361 11.41H6.12L3.18 6.706.24 11.412h1.764c0 2.172.804 4.44 1.882 6.106.014.024 1.118 1.437 1.135 1.456a9.71 9.71 0 002.172 1.74c.021.012 1.358.656 1.57.732.1.036.674.214.863.262.128.031 1.203.226 1.268.233.324.033.645.057.967.057 1.965 0 3.88-.643 5.527-1.872.523-.393.65-1.166.283-1.728-.37-.561-1.092-.698-1.615-.304zM7.944 5.906a6.96 6.96 0 014.3-1.413c.202.002 1.885.283 2.029.331.07.024 1.392.62 1.401.624.615.36 1.177.811 1.67 1.337.008.007.522.621.55.662 1.004 1.342 1.748 3.293 1.748 5.143H17.88l2.94 4.704 2.94-4.704h-1.764c0-2.172-.804-4.44-1.882-6.105a131.754 131.754 0 00-1.135-1.457 9.71 9.71 0 00-2.172-1.74c-.021-.012-1.358-.655-1.57-.732-.1-.036-.674-.214-.863-.262a46.445 46.445 0 00-1.268-.232 9.376 9.376 0 00-.967-.058c-1.965 0-3.88.643-5.527 1.872-.523.394-.65 1.166-.283 1.728.37.56 1.092.696 1.615.302z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default RotateIcon;