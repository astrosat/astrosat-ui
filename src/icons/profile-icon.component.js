import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const ProfileIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm0 3.6c2.04 0 3.6 1.56 3.6 3.6s-1.56 3.6-3.6 3.6-3.6-1.56-3.6-3.6S9.96 3.6 12 3.6Zm0 17.04c-3 0-5.64-1.56-7.2-3.84 0-2.4 4.8-3.72 7.2-3.72 2.4 0 7.2 1.32 7.2 3.72-1.56 2.28-4.2 3.84-7.2 3.84Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ProfileIcon;
