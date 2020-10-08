import React from 'react';

import { Input as MuiInput, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ErrorIcon, CorrectIcon } from '../icons';

/**
 * @typedef {import('@material-ui/core/Input/Input').InputProps & {valid?: boolean}} InputProps
 */

/**
 * @param {import('@material-ui/core').Theme} theme
 * @param {InputProps} props
 */
const getColors = (theme, props) => {
  if (props.valid) {
    return theme.palette.success.main;
  } else if (props.error) {
    return theme.palette.error.main;
  } else {
    return theme.palette.primary.main;
  }
};

const inputStyles = makeStyles(theme => ({
  root: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    borderBottom: props => `2px solid ${getColors(theme, props)}`,
    borderRadius: '4.8px 4.8px 2px 2px',
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    }
  },
  disabled: {},
  input: {
    padding: '0',
    '&$disabled': {
      cursor: 'not-allowed'
    }
  }
}));

const inputAdornmentClasses = makeStyles(theme => ({
  root: {
    color: props => getColors(theme, props),
    height: theme.typography.pxToRem(16),
    width: theme.typography.pxToRem(16)
  }
}));

/**
 * @param { InputProps } props
 */
const getAdornment = props => {
  const adornmentClasses = inputAdornmentClasses(props);

  if (props.endAdornment) return props.endAdornment;
  if (props.error)
    return (
      <InputAdornment position="end">
        <ErrorIcon classes={adornmentClasses} />
      </InputAdornment>
    );
  if (props.valid)
    return (
      <InputAdornment position="end">
        <CorrectIcon classes={adornmentClasses} />
      </InputAdornment>
    );
  return null;
};

/**
 * @param { InputProps } props
 */
const Input = ({ fullWidth = true, ...props }) => {
  const inputClasses = inputStyles({ fullWidth, ...props });
  return (
    <MuiInput
      classes={inputClasses}
      endAdornment={getAdornment(props)}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
