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
  success: {
    color: theme.palette.success.main,
    height: theme.spacing(2),
    width: theme.spacing(2)
  }
}));

const iconButtonClasses = makeStyles(() => ({
  root: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const InputAdornment = ({ Icon, position = 'end', ...props }) => {
  const adornmentClasses = inputAdornmentClasses({});
  const iconClasses = iconButtonClasses({});
  const icon = <Icon classes={adornmentClasses[props.type]} />;
  return (
    <MuiInputAdornment position={position}>
      {props.onClick ? (
        <IconButton
          classes={iconClasses}
          aria-label={`${props.type} icon`}
          onClick={props.onClick}
        >
          {icon}
        </IconButton>
      ) : (
        icon
      )}
    </MuiInputAdornment>
  );
};

export default InputAdornment;
