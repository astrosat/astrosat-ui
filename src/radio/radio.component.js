import React from 'react';

import { Box, Radio as MuiRadio } from '@mui/material';

const CheckedIcon = () => (
  <Box
    component="span"
    sx={theme => ({
      position: 'relative',
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
      border: `1px solid ${theme.palette.text.primary}`,
      transition: theme.transitions.create(['border'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
      }),
      '&::after': {
        display: 'block',
        position: 'absolute',
        top: theme.typography.pxToRem(1),
        left: theme.typography.pxToRem(1),
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50%',
        content: '""',
        width: '0.75rem',
        height: '0.75rem',
      },
      'input:hover ~ &': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
      'input:disabled ~ &': {
        border: `1px solid ${theme.palette.text.primary}`,
      },
      'input:focus ~ &': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    })}
  />
);

const Icon = () => (
  <Box
    component="span"
    sx={theme => ({
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
      border: `1px solid ${theme.palette.text.primary}`,
      transition: theme.transitions.create(['border'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
      }),
      'input:hover ~ &': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
      'input:disabled ~ &': {
        border: `1px solid ${theme.palette.text.primary}`,
      },
      'input:focus ~ &': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    })}
  />
);

/**
 * @param {import('@mui/material').RadioProps} props
 * @param {React.Ref<any>} ref
 */
const Radio = (props, ref) => (
  <MuiRadio
    sx={{
      '&': {
        padding: '0rem',
      },
      '&:hover': {
        bgColor: 'transparent',
      },

      '&$checked:hover': {
        bgColor: 'transparent',
      },
    }}
    checkedIcon={<CheckedIcon />}
    icon={<Icon />}
    inputRef={ref}
    {...props}
  />
);

export default React.forwardRef(Radio);
