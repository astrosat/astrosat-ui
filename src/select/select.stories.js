import React from 'react';

import Select from '../select/select.component';

import MenuItem from '../menu/menu-item.component';

export default { title: 'Select' };

export const Options = () => (
  <Select value="">
    <MenuItem value="Option1">Option1</MenuItem>
    <MenuItem value="Option2">Option2</MenuItem>
    <MenuItem value="Option2">Option3</MenuItem>
  </Select>
);
export const NoOptions = () => (
  <Select value="">
    <MenuItem> No Option</MenuItem>
  </Select>
);
export const Disabled = () => (
  <Select value="" disabled>
    <MenuItem>NoOptions</MenuItem>
  </Select>
);
