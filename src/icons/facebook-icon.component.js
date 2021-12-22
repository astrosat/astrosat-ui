import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const FacebookIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M20.571 0c.91 0 1.782.37 2.425 1.03A3.566 3.566 0 0 1 24 3.518v16.964c0 .933-.361 1.828-1.004 2.488A3.385 3.385 0 0 1 20.57 24H3.43c-.91 0-1.782-.37-2.425-1.03A3.566 3.566 0 0 1 0 20.482V3.518c0-.933.361-1.828 1.004-2.487A3.385 3.385 0 0 1 3.43 0H20.57Zm-5.2 4.66h-1.924c-2.069 0-3 1.01-3 2.944v2.062H9v2.617h1.446v7.69h2.78V12.25h1.94l.205-2.585h-2.146V8.194c0-.61.11-.852.642-.852h1.505V4.66Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default FacebookIcon;
