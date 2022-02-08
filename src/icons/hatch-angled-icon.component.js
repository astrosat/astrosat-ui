import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const HatchAngledIcon = props => (
  <SvgIcon {...props}>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm10 12C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Z"
        fill="currentColor"
      />
      <path
        d="M6.646 21.203 21.5 6M2.646 18.203 18.203 2.646"
        stroke="currentColor"
      />
    </g>
    <path
      d="M1.04 12.354 12.354 1.04m-.708 21.92L22.96 11.646"
      stroke="currentColor"
    />
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="rotate(-90 12 12)"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default HatchAngledIcon;
