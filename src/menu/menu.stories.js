import React from 'react';

import SimpleMenu from './menu.component';
import Button from '@material-ui/core/Button';
import { MenuItem } from '@material-ui/core';

export default { title: 'Menu' };

export const MenuI = () => {
  return (
    <div>
      <SimpleMenu />
      <MenuItem>Profile</MenuItem>
    </div>
  );
};
