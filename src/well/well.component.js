import React from 'react';

import { Snackbar as MuiSnackbar } from '@material-ui/core';

import { Alert as MuiAlert } from '@material-ui/lab';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white'
  },
  icon: {
    display: 'none'
  },
  message: {
    color: theme.palette.secondary.main
  },
  filledError: {
    backgroundColor: theme.palette.error.main
  },
  outlinedError: {
    backgroundColor: theme.palette.error.main
  },
  filledSuccess: {
    backgroundColor: theme.palette.success.main
  },
  outlinedSuccess: {
    backgroundColor: theme.palette.success.main
  }
}));

const Alert = props => {
  const classes = useStyles({ props });

  return (
    <MuiAlert autoHideDuration={6000} classes={classes} {...props}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>This is some content for the detail element: </span>
        <span>lorem ipsum</span>lorem ipsum <span>lorem ipsum</span>
        <span>lorem ipsum</span>
        <span>some footer content</span>
      </div>
    </MuiAlert>
  );
};
export default Alert;
