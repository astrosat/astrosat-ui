import React from 'react';

import { Alert } from '@material-ui/lab';

import { makeStyles } from '@material-ui/core/styles';

import { fade } from '@material-ui/core';

import ErrorIcon from '../icons/correct-icon.component';

import SuccessIcon from '../icons/error-icon.component';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.background.paper && theme.palette.text.secondary
        : theme.palette.background.paper,
    display: 'flex',
    margin: theme.spacing(2),
    padding: '2rem',
    borderRadius: '0.3rem'
  },
  message: {
    color: theme.palette.text.primary
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
    marginRight: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Well = (
  { errorIcon = <ErrorIcon />, successIcon = <SuccessIcon />, ...rest },
  ref
) => {
  const classes = useStyles({});
  const component = (
    <Alert
      classes={classes}
      icon={[errorIcon, successIcon]}
      {...rest}
      ref={ref}
    />
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>{component}</div>
  );
};
export default React.forwardRef(Well);
