import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const LineTypeDashedIcon = props => (
  <SvgIcon {...props}>
    <path
      d="M.24 11.693h2.347v.612H.24v-.612zm3.497 0h2.347v.612H3.737v-.612zm3.497 0H9.58v.612H7.234v-.612zm3.496 0h2.348v.612H10.73v-.612zm3.497 0h2.347v.612h-2.347v-.612zm3.497 0h2.347v.612h-2.347v-.612zm3.775 0h2.261v.612H21.5v-.612z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default LineTypeDashedIcon;
