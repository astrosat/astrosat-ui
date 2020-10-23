import React from 'react';

import { Fade, Input as MuiInput, InputAdornment } from '@material-ui/core';
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
    backgroundColor: theme.palette.common.white,
    borderRadius: `0.3rem 0.3rem 0.125rem 0.125rem`,
    '&:after': {
      borderRadius: '100vh',
      position: 'absolute',
      content: '""',
      display: 'block',
      height: theme.typography.pxToRem(2),
      width: '100%',
      transform: 'translateY(1.75em)',
      background: props => getColors(theme, props)
    },
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    }
  },
  disabled: {},
  input: {
    padding: theme.spacing(2, 0),
    '&$disabled': {
      cursor: 'not-allowed'
    }
  }
}));

const inputAdornmentClasses = makeStyles(theme => ({
  root: {
    color: props => getColors(theme, props)
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
