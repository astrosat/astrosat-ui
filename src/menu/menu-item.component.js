import React from 'react';

import { MenuItem as MuiMenuItem } from '@mui/material';

/**
 * @param {Omit <import('@mui/material').MenuItemProps, "button">} props
 * @param {React.Ref<any>} ref
 */

const MenuItem = (props, ref) => {
  return (
    <MuiMenuItem
      {...props}
      ref={ref}
      sx={{
        '&': {
          padding: theme => theme.spacing(0.5),
          '& + &': {
            borderTop: theme => `1px solid ${theme.palette.divider}`,
          },
          '&:first-of-type': {
            borderTopLeftRadius: theme => theme.shape.borderRadius,
            borderTopRightRadius: theme => theme.shape.borderRadius,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: theme => theme.shape.borderRadius,
            borderBottomRightRadius: theme => theme.shape.borderRadius,
          },
        },
      }}
    />
  );
};

export default React.forwardRef(MenuItem);
