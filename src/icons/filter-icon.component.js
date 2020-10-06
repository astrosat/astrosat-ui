import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const FilterIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M22.967 0H1.034C.647 0 .293.21.115.546c-.18.34-.147.75.082 1.06l8.035 11.042.008.012c.292.384.45.85.45 1.328v9.003a.99.99 0 00.3.713c.191.188.454.295.726.295.14 0 .276-.028.405-.08l4.515-1.68c.405-.12.673-.491.673-.94v-7.31c0-.48.16-.945.45-1.33l.01-.011 8.034-11.042a1 1 0 00.082-1.061A1.037 1.037 0 0022.967 0z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default FilterIcon;
