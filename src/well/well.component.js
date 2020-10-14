import React from 'react';

import { Alert } from '@material-ui/lab';

import { makeStyles } from '@material-ui/core/styles';

import { fade } from '@material-ui/core';

import ErrorIcon from '../icons/error-icon.component';

import SuccessIcon from '../icons/correct-icon.component';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? 'transparent'
        : theme.palette.background.paper,
    margin: theme.spacing(2)
  },
  message: {
    color: theme.palette.text.primary
  },
  filledError: {
    backgroundColor: fade(theme.palette.error.main, 0.3),
    color: theme.palette.error.main
  },
  filledSuccess: {
    backgroundColor: fade(theme.palette.success.main, 0.3),
    color: theme.palette.success.main
  },
  filledInfo: {
    '& $icon': {
      display: 'none'
    }
  },
  standardError: {
    backgroundColor: fade(theme.palette.error.main, 0.3),
    border: `0.0625rem solid ${theme.palette.error.main}`
  },
  standardSuccess: {
    backgroundColor: fade(theme.palette.success.main, 0.3),
    border: `0.0625rem solid ${theme.palette.success.main}`
  },
  standardInfo: {
    border:
      theme.palette.type === 'dark'
        ? `0.0625rem solid ${theme.palette.text.primary}`
        : `0.0625rem solid ${theme.palette.text.primary}`,
    '& $icon': {
      display: 'none'
    }
  },
  icon: {
    marginRight: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Well = (props, ref) => {
  const classes = useStyles({});
  return (
    <Alert
      classes={classes}
      severity="info"
      iconMapping={{ error: <ErrorIcon />, success: <SuccessIcon /> }}
      {...props}
      ref={ref}
    />
  );
};
export default React.forwardRef(Well);
