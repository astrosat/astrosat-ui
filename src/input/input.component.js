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
    borderRadius: '4.8px 4.8px 2px 2px',
    '&::after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      height: theme.typography.pxToRem(2),
      width: '100%',
      bottom: '0',
      left: '0',
      backgroundColor: props.valid
        ? theme.palette.success.main
        : props.valid === false
        ? theme.palette.error.main
        : theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius
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

/**
 * @param { import('@material-ui/core/Input/Input').InputProps} props
 */

const Input = props => {
  const inputClasses = inputStyles(props);
  return <MuiInput classes={inputClasses} disableUnderline {...props} />;
};

export default Input;
