import React from 'react';

import { MenuItem as MuiMenuItem } from '@material-ui/core';

import { darken, makeStyles } from '@material-ui/core/styles';

const menuItemStyles = makeStyles(theme => ({
  root: {
    color:
      theme.palette.type === 'light'
        ? theme.palette.text.primary
        : darken(theme.palette.text.primary, 0.8),
    padding: theme.spacing(0.5),
    '& + &': {
      borderTop:
        theme.palette.type === 'light'
          ? `0.0625em solid ${theme.palette.text.primary}`
          : `0.0625em solid ${theme.palette.grey[800]}`
    },
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[300]
    }
  }
}));

/**
 * @param {Omit <import('@material-ui/core').MenuItemProps, "button">} props
 * @param {React.Ref<any>} ref
 */

const MenuItem = (props, ref) => {
  const menuItemClasses = menuItemStyles(props);
  return <MuiMenuItem classes={menuItemClasses} {...props} ref={ref} />;
};

export default React.forwardRef(MenuItem);
