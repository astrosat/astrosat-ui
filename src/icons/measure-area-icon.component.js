import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const MeasureAreaIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1.667 1.655 18 .216v17.796h-18V1.655Zm2 2.024v13.988h14V3.847l-14-.168ZM22 19.333V2Z"
      fill="currentColor"
    />
    <path d="M22 19.333V2" stroke="currentColor" strokeLinecap="square" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 1.118 23.191 3.5h-2.382L22 1.118Z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.333 22H2Z"
      fill="currentColor"
    />
    <path d="M19.333 22H2" stroke="currentColor" strokeLinecap="square" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.118 22 3.5 20.809v2.382L1.118 22Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </SvgIcon>
);

export default MeasureAreaIcon;
