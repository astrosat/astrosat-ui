import React from 'react';

import { Menu as MuiMenu } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  list: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

/**
 * @param {import('@mui/material').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = (props, ref) => {
  const classes = useStyles(props);
  return <MuiMenu classes={classes} {...props} ref={ref} />;
};

export default React.forwardRef(Menu);
