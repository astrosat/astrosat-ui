import React from 'react';

import { MenuItem as MuiMenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const menuItemStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    '& + &': {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
  },
}));

/**
 * @param {Omit <import('@mui/material').MenuItemProps, "button">} props
 * @param {React.Ref<any>} ref
 */

const MenuItem = (props, ref) => {
  const menuItemClasses = menuItemStyles(props);
  return <MuiMenuItem classes={menuItemClasses} {...props} ref={ref} />;
};

export default React.forwardRef(MenuItem);
