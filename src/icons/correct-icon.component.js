import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const CorrectIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm7.122-18.337c.095.04.18.101.25.177v-.001a.844.844 0 010 1.156L9.476 17.361a.756.756 0 01-1.103 0l-4.144-4.34a.844.844 0 010-1.156.754.754 0 011.104 0l3.592 3.763 9.344-9.788a.755.755 0 01.853-.177z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default CorrectIcon;
