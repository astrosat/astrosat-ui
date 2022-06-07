import React from 'react';

import Select from '../select/select.component';

import { alpha } from '@mui/material/styles';
import MenuItem from '../menu/menu-item.component';
import { baseTheme } from '../themes/palette';
import { coreTheme } from '../themes/core';

const Index = { title: 'Select' };

export default Index;

export const Options = () => (
  <Select value="">
    <MenuItem
      value="Option1"
      style={{
        marginRight: 0,
        marginLeft: 0,
      }}
    >
      Option1
    </MenuItem>
    <MenuItem
      value="Option2"
      style={{
        marginRight: 0,
        marginLeft: 0,
      }}
    >
      Option2
    </MenuItem>
    <MenuItem
      value="Option2"
      style={{
        marginRight: 0,
        marginLeft: 0,
      }}
    >
      Option3
    </MenuItem>
  </Select>
);
export const NoOptions = () => (
  <Select value="">
    <MenuItem
      style={{
        marginRight: 0,
        marginLeft: 0,
      }}
    >
      No Option
    </MenuItem>
  </Select>
);
export const Disabled = () => (
  <Select value="" disabled>
    <MenuItem>NoOptions</MenuItem>
  </Select>
);
export const WithStyles = () => {
  return (
    <Select
      value="Option1"
      disableUnderline
      fullWidth={false}
      sx={{
        '&': {
          border: theme => `1.5px solid ${theme.palette.primary.main}`,
          borderRadius: baseTheme.shape.borderRadius,
          width: '12.1875rem',
          backgroundColor: 'transparent',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          paddingBottom: '1.25rem',
          height: '2.25rem',
        },
      }}
    >
      <MenuItem
        value="Option1"
        style={{
          marginRight: 0,
          marginLeft: 0,
          backgroundColor: alpha(coreTheme.palette.common.black, 0.08),
        }}
      >
        Option1
      </MenuItem>
      <MenuItem
        value="Option2"
        style={{
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        Option2
      </MenuItem>
      <MenuItem
        value="Option2"
        style={{
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        Option3
      </MenuItem>
    </Select>
  );
};
