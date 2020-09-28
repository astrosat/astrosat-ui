import React from 'react';

import { Radio as MuiRadio } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const radioStyles = makeStyles(theme => ({
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
    borderRadius: '50%',
    border: `1px solid ${theme.palette.text.primary}`,
    transition: theme.transitions.create(['border'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short
    }),
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.text.primary}`
    },
    'input:focus ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  checkedIcon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.text.primary}`,
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
      borderRadius: '50%',
      content: '""',
      width: '0.75rem',
      height: '0.75rem'
    },
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.text.primary}`
    },
    'input:focus ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  checked: {},
  disabled: {}
}));

const Radio = (props, ref) => {
  const radioClasses = radioStyles({});
  return (
    <MuiRadio
      classes={radioClasses}
      checkedIcon={<span className={radioClasses.checkedIcon} />}
      icon={<span className={radioClasses.icon} />}
      inputRef={ref}
      {...props}
    />
  );
};

export default React.forwardRef(Radio);
