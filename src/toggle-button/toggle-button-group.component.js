import React from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
 * @param {import('@material-ui/lab').ToggleButtonGroupProps} props
 */
const ToggleButtonGroup = ({ exclusive = true, ...rest }) => {
  const classes = useStyles({});
  return (
    <MuiToggleButtonGroup exclusive={exclusive} classes={classes} {...rest} />
  );
};

export default ToggleButtonGroup;
