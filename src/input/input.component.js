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
    backgroundColor: theme.palette.common.white,
    /** @param {InputProps} props */
    paddingLeft: props => (props.startAdornment ? theme.spacing(2) : 0),
    /** @param {InputProps} props */
    paddingRight: props =>
      props.endAdornment || props.error || props.valid ? theme.spacing(2) : 0,
    borderRadius: `0.3rem 0.3rem 0.125rem 0.125rem`,
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    },
    '&$multiline': {
      padding: theme.spacing(2)
    }
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
      pointerEvents: 'none'
    },
    '&:before': { display: 'none' },
    '&$multiline': { '&:after': { display: 'none' } }
  },
  input: {
    /** @param {InputProps} props */
    padding: props => (props.multiline ? 0 : theme.spacing(2)),
    '&$disabled': {
      cursor: 'not-allowed'
    }
  },
  multiline: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    '&$disabled': {
      backgroundColor: theme.palette.common.white,
      opacity: '0.3',
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
