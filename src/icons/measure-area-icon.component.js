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
      d="M1.667 1.655l18 .216v17.796h-18V1.655zm2 2.024v13.988h14V3.847l-14-.168zM22 19.333V2z"
      fill="currentColor"
    />
    <path d="M22 19.333V2" stroke="currentColor" strokeLinecap="square" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 1.118L23.191 3.5h-2.382L22 1.118z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.333 22H2z"
      fill="currentColor"
    />
    <path d="M19.333 22H2" stroke="currentColor" strokeLinecap="square" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.118 22L3.5 20.809v2.382L1.118 22z"
      fill="currentColor"
      stroke="currentColor"
    />
  </SvgIcon>
);

export default MeasureAreaIcon;
