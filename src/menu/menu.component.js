import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu as MuiMenu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const Menu = () => {
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true">
        Open Menu
      </Button>
      <MuiMenu
        // id="simple-menu"
        // anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        // onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
      </MuiMenu>
    </div>
  );
};
export default Menu;
