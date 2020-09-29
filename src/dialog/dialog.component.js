import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

const titleStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    height: '7rem',
    width: '100%',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main
  }
}));

const contentStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    padding: '1.25rem'
  }
}));

const actionsStyles = makeStyles(() => ({
  root: {
    padding: '1.25rem'
  }
}));

const dialogStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    minWidth: '46.5rem',
    maxHeight: '46.5rem',
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius
  }
}));

const Dialog = (
  { children, title = '', open = false, actions, ...props },
  ref
) => {
  const titleClasses = titleStyles({});
  const contentClasses = contentStyles({});
  const actionsClasses = actionsStyles({});
  const dialogClasses = dialogStyles({});
  return (
    <MuiDialog
      open={open}
      {...props}
      classes={dialogClasses}
      transitionDuration={{ enter: 0, exit: 0 }}
      ref={ref}
    >
      <DialogTitle classes={titleClasses} disableTypography>
        {title}
      </DialogTitle>
      <DialogContent classes={contentClasses}>{children}</DialogContent>
      {actions && (
        <DialogActions classes={actionsClasses}>{actions}</DialogActions>
      )}
    </MuiDialog>
  );
};

export default React.forwardRef(Dialog);
