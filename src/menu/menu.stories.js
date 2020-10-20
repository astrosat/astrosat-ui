import React from 'react';

import { default as Menu } from './menu.component';

// import { MenuItem } from '@material-ui/core';

export default { title: 'Menu' };

export const Options = () => {
  return <Menu open={true}></Menu>;
};
export const NoOption = () => {
  return <Menu open={true}></Menu>;
};
export const Disabled = () => {
  return <Menu open={true}></Menu>;
};
