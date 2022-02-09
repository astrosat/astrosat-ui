import React from 'react';

import { Checkbox as MuiCheckbox } from '@mui/material';

import { makeStyles } from '@mui/styles';

const checkboxStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&$checked:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.1875rem',
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
  },
  checkedIcon: {
    position: 'relative',
    width: '1rem',
    height: '1rem',
    borderRadius: theme.typography.pxToRem(3),
    border: `1px solid ${theme.palette.text.primary}`,
    transition: theme.transitions.create(['border'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '0.75rem',
      height: '0.75rem',
      top: theme.typography.pxToRem(1),
      left: theme.typography.pxToRem(1),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.typography.pxToRem(1),
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
  },
  checked: {},
  disabled: {},
}));

/**
 * @param {import('@mui/material').CheckboxProps} props
 * @param {React.Ref<any>} ref
 */
const Checkbox = (props, ref) => {
  const { icon, checkedIcon, ...checkboxClasses } = checkboxStyles({});
  return (
    <MuiCheckbox
      classes={checkboxClasses}
      checkedIcon={<span className={checkedIcon} />}
      icon={<span className={icon} />}
      inputRef={ref}
      {...props}
    />
  );
};

export default React.forwardRef(Checkbox);
