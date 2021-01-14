import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const FoodIcon = props => (
  <SvgIcon {...props}>
    <g
      clipPath="url(#food-clip0)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    >
      <path d="M23.292 2.56c.127-.977-1.038-1.447-1.67-.827L13.6 10l4.4 4.4.354-.437c2.097-2.95 4.363-7.01 4.938-11.404zm-5.705 9.699c1.531-2.277 3.015-5.052 3.756-8.013l-5.954 5.83 2.198 2.183zM14.837 18.6l-4.79-4.91-6.462 6.588a2.235 2.235 0 000 3.119c.854.87 2.247.87 3.102 0l5.31-5.414.635.647.001.001a1.519 1.519 0 002.204-.031zm-3.4-2.332l-.827-.868-5.142 5.243-.74.755a.633.633 0 00-.001.878c.227.232.59.232.817 0l5.894-6.008z" />
      <path d="M6.416 0l5.158 5.16a3.184 3.184 0 01.395 4.019L23.25 19.862a2.397 2.397 0 11-3.39 3.389L9.179 11.969a3.183 3.183 0 01-4.02-.395L0 6.416 6.416 0zM2.224 6.416l4.047 4.046a1.61 1.61 0 002.275 0 .969.969 0 011.39.02L21.005 22.17a.823.823 0 101.166-1.166L10.474 9.93a.971.971 0 01-.012-1.382 1.61 1.61 0 000-2.276L6.416 2.225l-.656.655 3.478 3.477L8.125 7.47 4.648 3.993l-.655.655L7.47 8.125 6.357 9.238 2.88 5.76l-.656.656z" />
    </g>
    <defs>
      <clipPath id="food-clip0">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default FoodIcon;
