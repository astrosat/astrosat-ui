import React from 'react';

import { MenuItem as MuiMenuItem, fade } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const menuItemStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
    '& + &': {
      borderTop: `0.0625em solid ${theme.palette.text.secondary}`
    },
    '&:first-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:last-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? fade(theme.palette.action.hover, 1)
          : fade(theme.palette.action.hover, 0.2)
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
