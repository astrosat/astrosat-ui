import React from 'react';

import Menu from './menu.component';

import MenuItem from '@material-ui/core/MenuItem';
export default { title: 'Menu' };

export const Standard = () => (
  <Menu>
    <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
);
