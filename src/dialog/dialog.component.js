import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Dialog as MuiDialog } from '@material-ui/core';

const dialogStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    minWidth: theme.spacing(100),
    maxHeight: theme.spacing(100),
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius
  }
}));

const Dialog = ({ children, ...props }, ref) => {
  const dialogClasses = dialogStyles({});
  return (
    <MuiDialog {...props} classes={dialogClasses} ref={ref}>
      {children}
    </MuiDialog>
  );
};

export default React.forwardRef(Dialog);
