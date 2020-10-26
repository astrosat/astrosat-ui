import React from 'react';

import { MenuItem as MuiMenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const menuItemStyles = makeStyles(theme => ({
  root: {
    padding: '0.3em',
    backgroundColor: 'none',
    '&:nth-child(2)': {
      borderBottom: `0.0625em solid ${theme.palette.text.secondary}`,
      borderTop: `0.0625em solid ${theme.palette.text.secondary}`
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[300]
    }
  }
}));

/**
 * @param {React.Ref<any>} ref
 */

const MenuItem = (props, ref) => {
  const menuItemClasses = menuItemStyles({});
  return <MuiMenuItem classes={menuItemClasses} ref={ref} {...props} />;
};

export default React.forwardRef(MenuItem);
