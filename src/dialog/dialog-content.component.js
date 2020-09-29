import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogContent as MuiDialogContent } from '@material-ui/core';

const contentStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(0, 2.5),
    margin: theme.spacing(2.5, 0),
    '&:first-child': {
      paddingTop: '0'
    }
  }
}));

const DialogContent = ({ children }) => {
  const contentClasses = contentStyles({});
  return (
    <MuiDialogContent classes={contentClasses}>{children}</MuiDialogContent>
  );
};

export default DialogContent;
