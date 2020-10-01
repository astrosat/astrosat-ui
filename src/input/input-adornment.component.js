import React from 'react';

import {
  InputAdornment as MuiInputAdornment,
  IconButton
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const InputAdornmentClasses = makeStyles(theme => ({
  root: {},
  error: {
    height: '1rem',
    width: '1rem',
    color: theme.palette.error.main
  }
}));

const InputAdornment = ({ Icon, ...props }) => {
  const classes = InputAdornmentClasses({});

  return (
    <MuiInputAdornment position="end">
      <IconButton aria-label="Error" onClick={props.onClick}>
        {<Icon classes={classes[props.type]} />}
      </IconButton>
    </MuiInputAdornment>
  );
};

export default InputAdornment;
