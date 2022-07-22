import React from 'react';

import { Box, Checkbox as MuiCheckbox } from '@mui/material';

const CheckedIcon = () => (
  <Box
    component="span"
    sx={{
      position: 'relative',
      width: '1rem',
      height: '1rem',
      borderRadius: theme => theme.typography.pxToRem(3),
      border: theme => `1px solid ${theme.palette.text.primary}`,
      transition: theme =>
        theme.transitions.create(['border'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.short,
        }),
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '0.75rem',
        height: '0.75rem',
        top: theme => theme.typography.pxToRem(1),
        left: theme => theme.typography.pxToRem(1),
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: theme => theme.typography.pxToRem(1),
      },
      'input:hover ~ &': {
        border: theme => `1px solid ${theme.palette.primary.main}`,
      },
      'input:disabled ~ &': {
        border: theme => `1px solid ${theme.palette.text.primary}`,
      },
      'input:focus ~ &': {
        border: theme => `1px solid ${theme.palette.primary.main}`,
      },
    }}
  />
);

const Icon = () => (
  <Box
    component="span"
    sx={{
      width: '1rem',
      height: '1rem',
      borderRadius: '0.1875rem',
      border: theme => `1px solid ${theme.palette.text.primary}`,
      transition: theme =>
        theme.transitions.create(['border'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.short,
        }),
      'input:hover ~ &': {
        border: theme => `1px solid ${theme.palette.primary.main}`,
      },
      'input:disabled ~ &': {
        border: theme => `1px solid ${theme.palette.text.primary}`,
      },
      'input:focus ~ &': {
        border: theme => `1px solid ${theme.palette.primary.main}`,
      },
    }}
  />
);

/**
 * @param {import('@mui/material').CheckboxProps} props
 * @param {React.Ref<any>} ref
 */
const Checkbox = (props, ref) => (
  <MuiCheckbox
    sx={{
      '&': {
        padding: '0rem',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&$checked:hover': {
        backgroundColor: 'transparent',
      },
    }}
    checkedIcon={<CheckedIcon />}
    icon={<Icon />}
    inputRef={ref}
    {...props}
  />
);

export default React.forwardRef(Checkbox);
