import React from 'react';

import Input from '../input/input.component';

import { Select as MuiSelect } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const menuStyles = makeStyles(theme => ({
  paper: {
    marginTop: '0.625rem',
  },
}));
/**
 * @param {import('@mui/material').SelectProps} props
 * @param {React.Ref<any>} ref
 */

const Select = (
  { MenuProps, input = <Input />, fullWidth = true, ...rest },
  ref
) => {
  const menuClasses = menuStyles({});
  return (
    <MuiSelect
      input={input}
      fullWidth={fullWidth}
      MenuProps={{
        classes: menuClasses,
        MenuListProps: { ...MenuProps?.MenuListProps, disablePadding: true },
        ...MenuProps,
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Select);
