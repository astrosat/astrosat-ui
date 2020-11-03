import React from 'react';

import Select from './select.component';

import Menu from '../menu/menu.component';

import MenuItem from '../menu/menu-item.component';

export default { title: 'Select1' };

export const Options = () => (
  <Select value="">
    <Menu open anchorEl={document.body}>
      <MenuItem value={'Option1'}>Option1</MenuItem>
      <MenuItem value={'Option2'}>Option2</MenuItem>
      <MenuItem value={'Option3'}>Option3</MenuItem>
    </Menu>
  </Select>
);
export const NoOptions = () => (
  <Select value="">
    <MenuItem> No Option</MenuItem>
  </Select>
);
export const Disabled = () => (
  <Select value="" disabled>
    <Menu open anchorEl={document.body}>
      <MenuItem>NoOptions</MenuItem>
    </Menu>
  </Select>
);
