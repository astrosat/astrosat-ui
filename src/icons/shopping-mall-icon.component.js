import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const ShoppingMallIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M22.08 7.667H1.92l-1.92 16h24l-1.92-16Zm-5.308-1.614a5.053 5.053 0 0 0-10.105 0v2.526c0 .698.06 1.263.971 1.263s1.264-.565 1.264-1.263V6.053c0-1.396 1.422-2.96 2.817-2.96 1.396 0 3.038 1.564 3.038 2.96v2.526c0 .698.362 1.263 1.06 1.263.697 0 .955-.565.955-1.263V6.053Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ShoppingMallIcon;
