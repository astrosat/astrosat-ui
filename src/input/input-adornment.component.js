import React from 'react';

import {
  InputAdornment as MuiInputAdornment,
  IconButton
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const InputAdornmentClasses = makeStyles(theme => ({
  error: {
    color: theme.palette.error.main,
    height: '1.5rem',
    width: '1.5rem'
  },
  password: {
    height: '1.5rem',
    width: '1.5rem'
  }
}));

const InputAdornment = ({ Icon, ...props }) => {
  const classes = InputAdornmentClasses({});

  return (
    <MuiInputAdornment position="end">
      <IconButton aria-label={`${props.type} icon`} onClick={props.onClick}>
        {<Icon classes={classes[props.type]} />}
      </IconButton>
    </MuiInputAdornment>
  );
};

export default InputAdornment;
