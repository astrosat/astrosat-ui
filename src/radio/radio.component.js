import React from 'react';

import { Radio as MuiRadio } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const radioStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    marginRight: '0.25rem',
    minHeight: '1.4375rem'
  },
  icon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.1875rem',
    border: `1px solid ${theme.palette.secondary.main}`,
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.main}`,
      transition: 'border-color 250ms ease'
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
      border: `1px solid ${theme.palette.primary.main}`,
      transition: 'border-color 250ms ease'
    },
    'input:focus ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  checked: {},
  disabled: {}
}));

const Radio = ({ disabled = false, ...rest }, ref) => {
  const radioClasses = radioStyles({});
  return (
    <MuiRadio
      classes={radioClasses}
      checkedIcon={<span className={radioClasses.checkedIcon} />}
      icon={<span className={radioClasses.icon} />}
      inputRef={ref}
      disableRipple={true}
      disabled={disabled}
      style={{ backgroundColor: 'transparent' }}
      {...rest}
    />
  );
};

export default React.forwardRef(Radio);
