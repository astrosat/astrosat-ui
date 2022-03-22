import React from 'react';

import { default as MenuItem } from './menu-item.component';

import { default as Menu } from './menu.component';

const Index = { title: 'Menu' };

export default Index;

export const Options = () => {
  return (
    <Menu open anchorEl={document.body}>
      <MenuItem>Option1</MenuItem>
      <MenuItem>Option2</MenuItem>
      <MenuItem>Option3</MenuItem>
    </Menu>
  );
};
