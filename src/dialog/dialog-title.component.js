import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogTitle as MuiDialogTitle } from '@material-ui/core';

const titleStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.spacing(3),
    fontWeight: 'bold',
    height: theme.spacing(14),
    width: '100%',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main
  }
}));

const DialogTitle = ({ children }) => {
  const titleClasses = titleStyles({});
  return (
    <MuiDialogTitle classes={titleClasses} disableTypography>
      {children}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
