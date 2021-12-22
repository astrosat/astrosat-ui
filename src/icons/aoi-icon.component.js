import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const AoiIcon = props => (
  <SvgIcon {...props}>
    <defs>
      <path id="a" d="M0 0h24v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="currentColor">
        <use xlinkHref="#a" />
      </mask>
      <g
        mask="url(#b)"
        fillRule="nonzero"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3.499 18.624v.017l7.653 4.17.008-.003c.219.118.463.192.726.192.264 0 .508-.074.728-.192l.008.004 7.653-4.17v-.018a.864.864 0 0 0 .498-.795.86.86 0 0 0-.506-.796l-7.64-4.183h-.015a1.519 1.519 0 0 0-.726-.192c-.262 0-.506.073-.725.192h-.014l-7.642 4.183a.86.86 0 0 0-.505.796c0 .358.205.665.499.795z" />
        <path d="M12.128 1c-3.149 0-5.71 2.73-5.71 6.087 0 3.526 4.802 10.298 5.709 10.649.92-.36 5.71-7.017 5.71-10.649 0-3.356-2.56-6.087-5.71-6.087zm.135 9.443c-1.706 0-3.094-1.48-3.094-3.298 0-1.82 1.388-3.3 3.094-3.3s3.095 1.48 3.095 3.3c0 1.818-1.389 3.298-3.095 3.298z" />
      </g>
    </g>
  </SvgIcon>
);

export default AoiIcon;
