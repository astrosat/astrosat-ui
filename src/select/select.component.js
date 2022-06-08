import React from 'react';

import Input from '../input/input.component';

import { Select as MuiSelect } from '@mui/material';

/**
 * @param {import('@mui/material').SelectProps} props
 * @param {React.Ref<any>} ref
 */

const Select = (
  { MenuProps, input = <Input />, fullWidth = true, ...rest },
  ref
) => {
  return (
    <MuiSelect
      input={input}
      fullWidth={fullWidth}
      MenuProps={{
        MenuListProps: { ...MenuProps?.MenuListProps, disablePadding: true },
        ...MenuProps,
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Select);
