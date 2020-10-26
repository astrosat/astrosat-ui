import React from 'react';

import { default as MenuItem } from '../menu/menuItem.component';

import { default as Menu } from './menu.component';

export default { title: 'Menu' };

export const Options = () => {
  return (
    <Menu open anchorEl={document.body}>
      <MenuItem>Option1</MenuItem>
      <MenuItem>Option2</MenuItem>
      <MenuItem>Option3</MenuItem>
    </Menu>
  );
};
