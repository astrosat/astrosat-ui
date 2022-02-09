import React from 'react';

import { Input as MuiInput, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ErrorIcon, CorrectIcon } from '../icons';

/**
 * @typedef {import('@mui/material/Input/Input').InputProps & {valid?: boolean}} InputProps
 */

/**
 * @param {import('@mui/material').Theme} theme
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
    /** @param {InputProps} props */
    paddingLeft: props => (props.startAdornment ? theme.spacing(2) : 0),
    /** @param {InputProps} props */
    paddingRight: props =>
      props.endAdornment || props.error || props.valid ? theme.spacing(2) : 0,
    borderRadius: `0.3rem 0.3rem 0.125rem 0.125rem`,
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      cursor: 'not-allowed',
    },
    '&$multiline': {
      padding: theme.spacing(2),
    },
  },
  disabled: {},
  underline: {
    '&:after': {
      borderBottom: props => `2px solid ${getColors(theme, props)}`,
      borderRadius: '100vh',
      left: 0,
      bottom: 0,
      content: '""',
      position: 'absolute',
      right: 0,
      transform: 'scaleX(1)',
      pointerEvents: 'none',
    },
    '&:before': { display: 'none' },
    '&$multiline': { '&:after': { display: 'none' } },
    '&$disabled': { '&:after': { borderColor: theme.palette.action.disabled } },
  },
  input: {
    /** @param {InputProps} props */
    padding: props => (props.multiline ? 0 : theme.spacing(2)),
    '&$disabled': {
      cursor: 'not-allowed',
    },
  },
  multiline: {
    borderRadius: theme.shape.borderRadius,
    border: props => `2px solid ${getColors(theme, props)}`,
    '&$disabled': {
      borderColor: theme.palette.action.disabled,
      cursor: 'not-allowed',
    },
  },
}));

const inputAdornmentClasses = makeStyles(theme => ({
  root: {
    color: props => getColors(theme, props),
  },
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
