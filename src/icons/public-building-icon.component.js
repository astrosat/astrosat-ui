import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const PublicBuildingIcon = props => (
  <SvgIcon {...props}>
    <path d="M9.6 15.48h4.8v5.76H9.6v-5.76z" fill="currentColor" />
    <path
      d="M18.6 8.76H5.4c-.331 0-.6.147-.6.328V21.24h3.6l-.065-7.38c0-.18.269-.328.6-.328h6c.331 0 .6.147.6.329l.065 7.379h3.6V9.088c0-.181-.269-.328-.6-.328zm.173-3.4L12 3 5.228 5.36c-.26.085-.428.274-.428.482v1.584h14.4V5.842c0-.208-.167-.397-.427-.482z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.4 8.76h3.04c.22 0 .4.18.4.4v12.08H0V9.16c0-.22.18-.4.4-.4zm20.16 0h3.04c.22 0 .4.18.4.4v12.08h-3.84V9.16c0-.22.18-.4.4-.4z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default PublicBuildingIcon;
