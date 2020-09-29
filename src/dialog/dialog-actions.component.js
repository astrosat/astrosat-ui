import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogActions as MuiDialogActions } from '@material-ui/core';

const actionsStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2.5, 2.5, 2.5)
  }
}));

const DialogActions = ({ children }) => {
  const actionsClasses = actionsStyles({});
  return (
    <MuiDialogActions classes={actionsClasses}>{children}</MuiDialogActions>
  );
};

export default DialogActions;
