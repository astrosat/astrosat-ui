import React from 'react';

import { Menu as MuiMenu } from '@mui/material';

/**
 * @param {import('@mui/material').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = (props, ref) => {
  return (
    <MuiMenu
      {...props}
      ref={ref}
      sx={{
        '&': {
          marginTop: theme => theme.spacing(-2),
        },
      }}
    />
  );
};

export default React.forwardRef(Menu);
