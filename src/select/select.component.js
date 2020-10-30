import React, { useState } from 'react';

import { Select as MuiSelect } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '../form-control/form-control.component';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: theme.palette.secondary.main,
    transform: 'rotate(-90deg)'
  },
  iconOpen: {
    transform: 'rotate(0deg)'
  },
  disabled: {
    '&:hover': {
      cursor: 'not-allowed'
    }
  }
}));

/**
 * @param {import('@material-ui/core').SelectProps} props
 * @param {React.Ref<any>} ref
 */

const Select = ({ variant = 'filled', ...rest }, ref) => {
  const classes = useStyles({ variant, ...rest });

  const [value, setOptions] = useState('');

  const handleChange = event => {
    setOptions(event.target.value);
  };

  return (
    <FormControl>
      <MuiSelect
        variant={variant}
        value={value}
        onChange={handleChange}
        classes={classes}
        {...rest}
        ref={ref}
      />
    </FormControl>
  );
};

export default React.forwardRef(Select);
