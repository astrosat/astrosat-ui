import React, { useState } from 'react';

import { FormControl, Select as MuiSelect } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
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
    backgroundColor: theme.palette.grey[300],
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
  const classes = useStyle({ variant, ...rest });

  const [options, setOptions] = useState('');

  const handleChange = event => {
    setOptions(event.target.value);
  };

  return (
    <MuiSelect
      variant={variant}
      value={options}
      onChange={handleChange}
      classes={classes}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Select);
