import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox as MuiCheckbox } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const labelStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
    '& .Mui-disabled': {
      color: theme.palette.secondary.main,
      opacity: 0.4
    },
    '&$disabled': {
      cursor: 'not-allowed'
    },
    margin: 0,
    minHeight: '1.4375rem'
  },
  disabled: {}
}));

const checkboxStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    marginRight: '0.25rem'
  },
  icon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.1875rem',
    border: `1px solid ${theme.palette.secondary.main}`,
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.main}`
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.secondary.main}`
    }
  },
  checkedIcon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '3px',
    border: `1px solid ${theme.palette.primary.main}`,
    '&:after': {
      display: 'block',
      position: 'absolute',
      top: '0.15rem',
      left: '0.15rem',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0.1875rem',
      content: '""',
      width: '0.75rem',
      height: '0.75rem'
    }
  },
  checked: {},
  disabled: {}
}));

const Checkbox = ({ label = '', disabled = false, ...rest }, ref) => {
  const checkboxClasses = checkboxStyles({});
  const labelClasses = labelStyles({});
  return (
    <FormControlLabel
      classes={labelClasses}
      control={
        <MuiCheckbox
          classes={checkboxClasses}
          checkedIcon={<span className={checkboxClasses.checkedIcon} />}
          icon={<span className={checkboxClasses.icon} />}
          disabled={disabled}
          inputRef={ref}
          inputProps={{ 'aria-label': `${label} checkbox` }}
          disableRipple={true}
          style={{ backgroundColor: 'transparent' }}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default React.forwardRef(Checkbox);
