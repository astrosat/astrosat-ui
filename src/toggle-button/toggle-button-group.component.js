import React from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

const StyledToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
  root: {
    width: props => (props.fullWidth ? '100%' : 'auto'),
  },
  groupedHorizontal: {
    '&:not(:first-child)': {
      border: 'none',
      margin: '0',
    },
  },
  groupedVertical: {
    '&:not(:first-child)': {
      border: 'none',
      margin: '0',
    },
  },
}));

/**
 * @param {import('@mui/lab').ToggleButtonGroupProps&{fullWidth?: boolean}} props
 */

const ToggleButtonGroup = ({
  exclusive = true,
  fullWidth = true,
  ...props
}) => {
  return (
    <StyledToggleButtonGroup
      fullWidth={fullWidth}
      exclusive={exclusive}
      {...props}
    />
  );
};

export default ToggleButtonGroup;
