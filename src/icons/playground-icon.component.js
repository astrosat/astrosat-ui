import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const PlaygroundIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M7.553.115a.597.597 0 0 0-.706 0l-6.6 3.6A.6.6 0 0 0 .6 4.8h13.2a.599.599 0 0 0 .353-1.085l-6.6-3.6ZM1.2 16.8h1.2v6.6a.6.6 0 0 0 1.2 0v-1.8h7.2v1.8a.6.6 0 0 0 1.2 0v-6.6h1.2v-2.4h-12v2.4Zm2.4 0h7.2V18H3.6v-1.2Zm0 2.4h7.2v1.2H3.6v-1.2ZM7.2 8.4a2.402 2.402 0 0 0-2.4 2.4v2.4h4.8v-2.4a2.402 2.402 0 0 0-2.4-2.4Z"
      fill="currentColor"
    />
    <path
      d="M1.2 13.2h2.4v-2.4a3.6 3.6 0 0 1 7.2 0v2.4h2.4V6h-12v7.2Zm22.2 8.4c-3 0-5.4-6-9-6.875V17.4c2.4.6 4.8 6.6 9 6.6.16 0 .312-.063.424-.176A.597.597 0 0 0 24 23.4v-1.2a.595.595 0 0 0-.176-.424.597.597 0 0 0-.424-.176Zm-7.8-9v1.358c.423.228.825.493 1.2.793V12.6a3.006 3.006 0 0 0-2.4-2.94v1.25c.717.253 1.198.93 1.2 1.69Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default PlaygroundIcon;
