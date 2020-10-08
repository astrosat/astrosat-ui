import React from 'react';

import {
  InputAdornment as MuiInputAdornment,
  IconButton
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const iconButtonStyles = makeStyles(() => ({
  root: {
    padding: '0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

/**
 * @param { import('@material-ui/core/InputAdornment/InputAdornment').InputAdornmentProps} props
 */

const InputAdornment = ({ position = 'end', children, ...props }) => {
  const iconButtonClasses = iconButtonStyles(props);
  return (
    <MuiInputAdornment position={position}>
      {props.onClick ? (
        <IconButton
          onClick={props.onClick}
          aria-label="Icon Button"
          classes={iconButtonClasses}
        >
          {children}
        </IconButton>
      ) : (
        children
      )}
    </MuiInputAdornment>
  );
};

export default InputAdornment;
