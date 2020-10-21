import { MenuItem } from '@material-ui/core';

import React from 'react';

import { default as Menu } from './menu.component';

export default { title: 'Menu' };

export const Options = () => {
  return (
    <Menu open={true}>
      <MenuItem>Option1</MenuItem>
      <MenuItem>Option2</MenuItem>
      <MenuItem>Option3</MenuItem>
    </Menu>
  );
};
