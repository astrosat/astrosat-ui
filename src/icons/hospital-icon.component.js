import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const HospitalIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 15h4.8v7.636H10V15Z" fill="currentColor" />
    <path
      d="M18.8 2c.331 0 .6.247.6.553V23h-3.6v-8.29c0-.305-.269-.552-.6-.552h-6c-.331 0-.6.247-.6.553V23H5V2.553C5 2.247 5.269 2 5.6 2h13.2Zm-6.93 2.333H9.178v.244c.693.028.764.121.764.964v4.576c0 .86-.07.945-.8.973v.243h2.763v-.243c-.712-.027-.802-.107-.808-.887V7.768h2.949v2.349c0 .86-.071.945-.808.973v.243H16v-.243c-.703-.027-.794-.107-.8-.887V5.54c0-.843.072-.936.773-.964v-.244h-2.7v.244c.66.026.762.11.772.823v2.059h-2.948V5.541c0-.843.071-.936.773-.964v-.244Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.4 10.59h3.04c.22 0 .4.18.4.4V23H0V10.99c0-.22.18-.4.4-.4Zm20.16 0h3.04c.22 0 .4.18.4.4V23h-3.84V10.99c0-.22.18-.4.4-.4Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default HospitalIcon;
