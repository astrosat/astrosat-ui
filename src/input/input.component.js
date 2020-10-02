import React from 'react';

import { Input as MuiInput, FormControl } from '@material-ui/core';

import InputLabel from './input-label.component';

import { makeStyles } from '@material-ui/core/styles';

const formControlStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

const inputStyles = makeStyles(theme => ({
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
  },
  formControl: {
    width: '100%'
  }
}));

const Input = props => {
  const inputClasses = inputStyles({});
  const formControlClasses = formControlStyles({});
  return (
    <FormControl classes={formControlClasses}>
      {props.label && <InputLabel htmlFor={props.id}>{props.label}</InputLabel>}
      <MuiInput
        id={props.id}
        classes={inputClasses}
        disableUnderline
        {...props}
      />
    </FormControl>
  );
};

export default Input;
