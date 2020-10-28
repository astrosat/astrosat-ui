import React from 'react';

import { MenuItem as MuiMenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const menuItemStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    '& + &': {
      borderTop: `0.0625em solid ${theme.palette.text.secondary}`
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      '&:last-child': {
        borderRadius: '0 0 0.3em 0.3em'
      }
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
