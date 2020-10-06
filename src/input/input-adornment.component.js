import React from 'react';

import { InputAdornment as MuiInputAdornment } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { ErrorIcon, CorrectIcon } from '../icons';

const inputAdornmentClasses = makeStyles(theme => ({
  root: props => ({
    color: props.valid ? theme.palette.success.main : theme.palette.error.main,
    height: theme.typography.pxToRem(16),
    width: theme.typography.pxToRem(16)
  })
}));

/**
 * @param { import('@material-ui/core/InputAdornment/InputAdornment').InputAdornmentProps} props
 */

const InputAdornment = ({ position = 'end', ...props }) => {
  const adornmentClasses = inputAdornmentClasses(props);
  return (
    <MuiInputAdornment position={position}>
      {props.valid ? (
        <CorrectIcon classes={adornmentClasses.root} />
      ) : (
        <ErrorIcon classes={adornmentClasses.root} />
      )}
    </MuiInputAdornment>
  );
};

export default InputAdornment;
