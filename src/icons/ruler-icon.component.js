import React from 'react';
import { SvgIcon } from '@mui/material';

/**
 * @param {import('@mui/material').SvgIconProps} props
 */
const RulerIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.3 1.5C8.3.786 8.953.3 9.56.3h4.236c.343 0 .637.145.836.39.19.234.268.528.268.81v21c0 .282-.08.576-.269.81-.198.245-.493.39-.835.39H9.56c-.608 0-1.261-.486-1.261-1.2v-21Zm1.069-.122c-.056.05-.069.096-.069.122v21c0 .026.013.072.069.122a.302.302 0 0 0 .192.078h4.235c.028 0 .04-.005.043-.007a.045.045 0 0 0 .015-.013c.016-.02.046-.076.046-.18v-21c0-.105-.03-.16-.045-.18a.042.042 0 0 0-.016-.013.102.102 0 0 0-.043-.007H9.56a.302.302 0 0 0-.192.078Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.8 2.2h2.1v.7H8.8v-.7Zm0 4.2h2.1v.7H8.8v-.7Zm0-2.1h2.1V5H8.8v-.7Zm0 4.2h2.1v.7H8.8v-.7Zm0 2.1h2.1v.7H8.8v-.7Zm0 2.1h2.1v.7H8.8v-.7Zm0 2.1h2.1v.7H8.8v-.7Zm0 2.1h2.1v.7H8.8v-.7Zm0 2.1h2.1v.7H8.8V19Zm0 2.1h2.1v.7H8.8v-.7Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default RulerIcon;
