import React from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  groupedHorizontal: {
    '&:not(:first-child)': {
      border: 'none',
      margin: '0'
    }
  }
}));

/**
 * @param {import('@material-ui/lab').ToggleButtonGroupProps} props
 */
export const ToggleButtonGroup = ({ exclusive = true, ...rest }) => (
  <MuiToggleButtonGroup
    exclusive={exclusive}
    classes={useStyles({})}
    {...rest}
  />
);
