import React from 'react';

import { Input, InputAdornment, IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { ErrorIcon } from '../icons';

const TextFieldStyles = makeStyles(theme => ({
  root: {
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
      height: '0.125rem',
      width: '100%',
      bottom: '0',
      left: '0',
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(0.6)
    },
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    }
  },
  input: {
    padding: '0',
    '&$disabled': {
      cursor: 'not-allowed'
    }
  },
  disabled: {},
  error: {
    '&::after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      height: '0.125rem',
      width: '100%',
      bottom: '0',
      left: '0',
      backgroundColor: theme.palette.error.main,
      borderRadius: theme.spacing(0.6)
    }
  }
}));

const errorAdornment = (
  <InputAdornment position="end">
    <IconButton aria-label="Error" onClick={() => console.log('Icon clicked!')}>
      <ErrorIcon />
    </IconButton>
  </InputAdornment>
);

const TextField = props => {
  const TextFieldClasses = TextFieldStyles({});
  return (
    <Input
      classes={TextFieldClasses}
      disableUnderline
      endAdornment={props.error && errorAdornment}
      {...props}
    />
  );
};

export default TextField;
