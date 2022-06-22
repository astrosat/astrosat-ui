import React from 'react';

import { Input as MuiInput, InputAdornment, alpha } from '@mui/material';

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
  } else if (props.disabled) {
    return theme.palette.action.disabled;
  } else {
    return theme.palette.primary.main;
  }
};

/**
 * @param { InputProps } props
 */
const getAdornment = props => {
  if (props.endAdornment) return props.endAdornment;
  if (props.error)
    return (
      <InputAdornment position="end">
        <ErrorIcon
          sx={{
            '&': {
              color: theme => theme.palette.error.main,
            },
          }}
        />
      </InputAdornment>
    );
  if (props.valid)
    return (
      <InputAdornment position="end">
        <CorrectIcon
          sx={{
            '&': {
              color: theme => theme.palette.success.main,
            },
          }}
        />
      </InputAdornment>
    );
  return null;
};

/**
 * @param { InputProps } props
 */
const Input = ({ fullWidth = true, ...props }) => {
  return (
    <MuiInput
      endAdornment={getAdornment(props)}
      sx={{
        '&': {
          fontSize: theme => theme.typography.pxToRem(14),
          borderRadius: `0.3rem`,
          paddingLeft: theme => (props.startAdornment ? theme.spacing(2) : 0),
          paddingRight: theme =>
            props.endAdornment || props.error || props.valid
              ? theme.spacing(2)
              : 0,
          '&.Mui-disabled': {
            backgroundColor: theme => alpha(theme.palette.common.black, 0.12),
            cursor: 'not-allowed',
          },
        },
        '&.MuiInput-underline': {
          '&:after': {
            borderBottom: theme => `2px solid ${getColors(theme, props)}`,
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
          '&.Mui-disabled': {
            '&:after': { borderColor: theme => theme.palette.action.disabled },
          },
        },
        input: {
          padding: theme => (props.multiline ? 0 : theme.spacing(2)),
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
        },
        '&.MuiInputBase-multiline': {
          border: theme => `2px solid ${theme.palette.primary.main}`,
          padding: theme => theme.spacing(2),
          '&.MuiInput-underline': {
            '&:after': {
              display: 'none',
            },
          },
        },
      }}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
