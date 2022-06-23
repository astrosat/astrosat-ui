import React from 'react';

import Select from '../select/select.component';

import { alpha, useTheme } from '@mui/material/styles';
import MenuItem from '../menu/menu-item.component';

const Index = { title: 'Select' };

export default Index;

export const Options = () => (
  <Select value="">
    <MenuItem value="Option1">Option1</MenuItem>
    <MenuItem value="Option2">Option2</MenuItem>
    <MenuItem value="Option2">Option3</MenuItem>
  </Select>
);
export const NoOptions = () => (
  <Select value="">
    <MenuItem>No Option</MenuItem>
  </Select>
);
export const Disabled = () => (
  <Select value="" disabled>
    <MenuItem>NoOptions</MenuItem>
  </Select>
);
export const WithStyles = () => {
  const theme = useTheme();
  return (
    <Select
      value="Option1"
      disableUnderline
      fullWidth={false}
      sx={{
        '&': {
          border: `1.5px solid ${theme.palette.primary.main}`,
          borderRadius: theme.shape.borderRadius,
          width: '12.1875rem',
          height: '2.25rem',
        },
        '.MuiSelect-select': {
          paddingBottom: theme.spacing(2.5),
          paddingLeft: theme.spacing(0.5),
        },
      }}
    >
      <MenuItem
        value="Option1"
        style={{
          backgroundColor: alpha(theme.palette.common.black, 0.08),
        }}
      >
        Option1
      </MenuItem>
      <MenuItem value="Option2">Option2</MenuItem>
      <MenuItem value="Option3">Option3</MenuItem>
    </Select>
  );
};
