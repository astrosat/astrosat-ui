import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const labelStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
    '& .Mui-disabled': {
      color: theme.palette.secondary.main,
      opacity: 0.4,
      cursor: 'not-allowed'
    }
  },
  label: {
    fontSize: '1rem'
  },
  disabled: {}
}));

const checkboxStyles = makeStyles(theme => ({
  root: {},
  icon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '3px',
    border: `1px solid ${theme.palette.secondary.main}`
  },
  checkedIcon: {
    width: '1rem',
    height: '1rem',
    borderRadius: '3px',
    border: `1px solid ${theme.palette.primary.main}`,
    '&::after': {
      display: 'block',
      position: 'absolute',
      left: '0.125rem',
      bordeRadius: '0.1875rem',
      content: '""',
      width: '0.75rem',
      height: '0.75rem',
      transition: 'background-color 250ms ease, opacity 250ms ease'
    },
    '&$checked::after': {
      backgroundColor: 'red'
    }
  },
  checked: {},
  disabled: {}
}));

const Checkbox = ({ label = '', disabled = false, ...rest }, ref) => {
  const checkboxClasses = checkboxStyles({});
  const labelClasses = labelStyles({});
  console.log('CheckboxClasses: ', checkboxClasses);
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
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default React.forwardRef(Checkbox);
