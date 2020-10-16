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
    padding: theme.spacing(2)
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
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.text.secondary
        : theme.palette.background.paper,
    color: theme.palette.info.main
  },
  outlinedInfo: {
    border: `0.0625rem solid ${theme.palette.text.primary}`
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
    border: `0.0625rem solid ${theme.palette.text.primary}`,
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.text.secondary
        : theme.palette.background.paper,
    paddingLeft: '2.5rem'
  },
  icon: {
    marginRight: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

/**
 * @param {import('@material-ui/core').AlertProps} props
 * @param {React.Ref<HTMLDivElement>} ref
 */

const Well = ({ severity = 'info', ...rest }, ref) => {
  const classes = useStyles({});
  return (
    <Alert
      classes={classes}
      severity={severity}
      iconMapping={{
        error: <ErrorIcon />,
        success: <SuccessIcon />,
        info: <></>
      }}
      {...rest}
      ref={ref}
    />
  );
};
export default React.forwardRef(Well);
