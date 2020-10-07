import React from 'react';

import { Input as MuiInput } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const inputStyles = makeStyles(theme => ({
  root: props => ({
    width: '100%',
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(0.6, 0.6, 0.25, 0.25),
    '&::after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      height: theme.spacing(0.25),
      width: '100%',
      bottom: '0',
      left: '0',
      backgroundColor: props.valid
        ? theme.palette.success.main
        : props.valid === false
        ? theme.palette.error.main
        : theme.palette.primary.main,
      borderRadius: theme.spacing(0.6)
    },
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    }
  }),
  disabled: {},
  input: {
    padding: '0',
    '&$disabled': {
      cursor: 'not-allowed'
    }
  }
}));

const Input = props => {
  const inputClasses = inputStyles(props);
  return <MuiInput classes={inputClasses} disableUnderline {...props} />;
};

export default Input;
