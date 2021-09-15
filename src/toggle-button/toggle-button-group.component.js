import React from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    /** @param {{ fullWidth: boolean }} props */
    width: props => (props.fullWidth ? '100%' : 'auto')
  },
  groupedHorizontal: {
    '&:not(:first-child)': {
      border: 'none',
      margin: '0'
    }
  },
  groupedVertical: {
    '&:not(:first-child)': {
      border: 'none',
      margin: '0'
    }
  }
}));

/**
 * @param {import('@material-ui/lab').ToggleButtonGroupProps&{fullWidth?: boolean}} props
 */
const ToggleButtonGroup = ({ exclusive = true, fullWidth = true, ...rest }) => {
  const classes = useStyles({ fullWidth });
  return (
    <MuiToggleButtonGroup exclusive={exclusive} classes={classes} {...rest} />
  );
};

export default ToggleButtonGroup;
