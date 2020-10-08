import React from 'react';

import { Switch as MuiSwitch, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  checked: {},
  disabled: {},
  track: {
    backgroundColor: theme.palette.grey[300],
    opacity: 1
  },
  thumb: {
    backgroundColor: theme.palette.common.white,
    height: '0.875rem',
    width: '0.875rem',
    boxShadow: 'none'
  },
  root: {
    height: '1rem',
    width: '1.875rem',
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: '0.0675rem',
    '&$checked': {
      transform: 'translateX(0.875rem)',
      '& + $track': {
        backgroundColor: theme.palette.success.main,
        opacity: 1
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.success.main,
        opacity: 0.3
      }
    }
  },
  colorSecondary: {
    '&$checked + $track': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  colorPrimary: {
    '&$checked + $track': {
      backgroundColor: theme.palette.primary.main
    }
  },
  sizeSmall: {
    width: '1.4375rem',
    height: '0.75rem',
    padding: 0,
    '& $thumb': {
      width: '0.625rem',
      height: '0.625rem',
      boxShadow: 'none'
    },
    '& $switchBase': {
      padding: '0.0675rem',
      '&$checked': {
        transform: 'translateX(0.6875rem)'
      }
    }
  }
}));

/**
 * @param {import('@material-ui/core').SwitchProps} props
 * @param {React.Ref<any>} ref
 */
const Switch = ({ color = 'default', ...rest }, ref) => {
  const classes = useStyle({});
  const component = (
    <MuiSwitch classes={classes} color={color} ref={ref} {...rest} />
  );
  return rest.disabled ? (
    <span style={{ cursor: 'not-allowed' }}>{component}</span>
  ) : (
    component
  );
};

export default React.forwardRef(Switch);
