import React from 'react';

import {
  InputAdornment as MuiInputAdornment,
  IconButton
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const inputAdornmentClasses = makeStyles(theme => ({
  error: {
    color: theme.palette.error.main,
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  password: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  }
}));

const iconButtonClasses = makeStyles(() => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const InputAdornment = ({ Icon, position = 'end', ...props }) => {
  const adornmentClasses = inputAdornmentClasses({});
  const iconClasses = iconButtonClasses({});
  return (
    <MuiInputAdornment position={position}>
      <IconButton
        classes={iconClasses}
        aria-label={`${props.type} icon`}
        onClick={props.onClick}
      >
        {<Icon classes={adornmentClasses[props.type]} />}
      </IconButton>
    </MuiInputAdornment>
  );
};

export default InputAdornment;
