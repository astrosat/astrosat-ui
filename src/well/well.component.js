import React from 'react';

import { Alert } from '@material-ui/lab';

import { makeStyles } from '@material-ui/core/styles';

import { fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin: '2rem',
    padding: '2rem',
    borderRadius: '0.3rem'
  },
  message: {
    color: theme.palette.secondary.main
  },
  filledError: {
    backgroundColor: fade(theme.palette.error.main, 0.3)
  },
  outlinedError: {
    backgroundColor: fade(theme.palette.error.main, 0.3)
  },
  standardError: {
    backgroundColor: fade(theme.palette.error.main, 0.3)
  },
  filledSuccess: {
    backgroundColor: fade(theme.palette.success.main, 0.3)
  },
  outlinedSuccess: {
    backgroundColor: fade(theme.palette.success.main, 0.3)
  },
  standardSuccess: {
    backgroundColor: fade(theme.palette.success.main, 0.3)
  },
  outlinedInfo: {
    border: `0.0625rem solid ${theme.palette.secondary.main}`
  },
  icon: {
    color: theme.palette.secondary.main,
    marginRight: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Well = (props, ref) => {
  const classes = useStyles({});
  return (
    <Alert classes={classes} {...props} fer={ref}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>This is some content for the detail element: </span>
        <span>lorem ipsum</span>lorem ipsum <span>lorem ipsum</span>
        <span>some footer content</span>
      </div>
    </Alert>
  );
};
export default React.forwardRef(Well);
