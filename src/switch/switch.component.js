import React from 'react';

import { Switch as MuiSwitch, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  checked: {},
  track: {
    backgroundColor: theme.palette.grey[300],
    opacity: 1
  },
  thumb: {
    backgroundColor: theme.palette.common.white,
    height: 14,
    width: 14,
    boxShadow: 'none'
  },
  root: {
    height: 16,
    width: 30,
    padding: 0,
    display: 'flex',
    '&$smallSize': {
      backgroundColor: 'yellow'
    }
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(14px)',
      '& + $track': { backgroundColor: theme.palette.success.main, opacity: 1 }
    }
  },
  colorSecondary: {
    '&$checked + $track': {
      backgroundColor: theme.palette.error.main
    }
  },
  colorPrimary: {
    '&$checked + $track': {
      backgroundColor: theme.palette.primary.main
    }
  },
  sizeSmall: {
    width: 26,
    height: 11,
    padding: 0,
    '& $thumb': {
      width: 10,
      height: 10,
      boxShadow: 'none'
    },
    '& $switchBase': {
      padding: 1.5,
      '&$checked': {
        transform: 'translateX(11px)'
      }
    }
  }
}));

/**
 * @param {import('@material-ui/core').SwitchProps} props
 */
const Switch = props => {
  const classes = useStyle(props);
  return <MuiSwitch classes={classes} {...props} />;
};

export default Switch;
