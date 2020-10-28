import React from 'react';

import { Menu as MuiMenu } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  paper: {
    width: '100%'
  }
}));

/**
 * @param {import('@material-ui/core').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = (props, ref) => {
  const classes = useStyles(props);
  return <MuiMenu classes={classes} {...props} ref={ref} />;
};

export default React.forwardRef(Menu);
