import React from 'react';

import { Checkbox as MuiCheckbox } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const checkboxStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    marginRight: '0.25rem',
    minHeight: '1.4375rem',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&$checked:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.1875rem',
    border: `1px solid ${theme.palette.secondary.main}`,
    transition: theme.transitions.create(['border'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short
    }),
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.secondary.main}`
    },
    'input:focus ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  checkedIcon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '3px',
    border: `1px solid ${theme.palette.secondary.main}`,
    transition: theme.transitions.create(['border'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short
    }),
    '&::after': {
      display: 'block',
      position: 'absolute',
      top: '0.35rem',
      left: '0.15rem',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0.1875rem',
      content: '""',
      width: '0.75rem',
      height: '0.75rem'
    },
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.secondary.main}`
    },
    'input:focus ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  checked: {},
  disabled: {}
}));

const Checkbox = ({ disabled = false, ...rest }, ref) => {
  const checkboxClasses = checkboxStyles({});
  return (
    <MuiCheckbox
      classes={checkboxClasses}
      checkedIcon={<span className={checkboxClasses.checkedIcon} />}
      icon={<span className={checkboxClasses.icon} />}
      inputRef={ref}
      disableRipple={true}
      disabled={disabled}
      {...rest}
    />
  );
};

export default React.forwardRef(Checkbox);
