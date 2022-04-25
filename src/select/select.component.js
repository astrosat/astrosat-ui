import React from 'react';

import { styled } from '@mui/material/styles';

import Input from '../input/input.component';

import { Select as MuiSelect } from '@mui/material';

const PREFIX = 'select';

const classes = {
  paper: `${PREFIX}-paper`
};

const StyledMuiSelect
 = styled(MuiSelect
)((
  {
    theme
  }
) => ({
  [`& .${classes.paper}`]: {
    marginTop: theme.spacing(5),
  }
}));

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
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Select);
