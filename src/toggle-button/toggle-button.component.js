import React from 'react';
import { darken, ToggleButton as MuiToggleButton } from '@mui/material';
import { styled } from '@mui/system';

const StyledToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  '&': {
    flexBasis: '100%',
    border: 'none',
    padding: '0.65em',
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.3),
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.3),
      opacity: 0.5,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700,
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5,
      },
    },
    '&.MuiToggleButton-sizeSmall': {
      padding: '0.57em',
      fontSize: theme.typography.pxToRem(14),
    },
    '&.MuiToggleButton-sizeLarge': {
      padding: '0.73em',
      fontSize: theme.typography.pxToRem(22),
    },
  },
}));

/**
 * @param {import('@mui/lab').ToggleButtonProps} props
 */
const ToggleButton = ({ sx = {}, ...props }) => {
  return (
    <StyledToggleButton disableRipple disableFocusRipple {...props} sx={sx} />
  );
};

export default ToggleButton;
