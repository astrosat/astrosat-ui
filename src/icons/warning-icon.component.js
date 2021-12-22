import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const WarningIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M12 24c6.626 0 12-5.374 12-12S18.626 0 12 0 0 5.374 0 12s5.374 12 12 12Zm1.5-10.5a1.5 1.5 0 1 1-3 0V6a1.5 1.5 0 1 1 3 0v7.5ZM12 16.476a1.5 1.5 0 1 1 0 2.999 1.5 1.5 0 0 1 0-2.999Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default WarningIcon;
