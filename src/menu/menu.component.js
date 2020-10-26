import React from 'react';

import { Menu as MuiMenu } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    backgroundColor: theme.palette.background.paper,
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

const Menu = ({ autoFocus = false, ...rest }, ref) => {
  const classes = useStyles({});
  return (
    <div>
      <MuiMenu classes={classes} autoFocus={autoFocus} {...rest} ref={ref} />
    </div>
  );
};

export default React.forwardRef(Menu);
