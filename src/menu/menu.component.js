import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import { Menu as MuiMenu } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';

import makeStyles from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   root: {

//   }
// }));

/**
 * @param {import('@material-ui/core').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = ({ ...rest }, ref) => {
  // const classes = useStyles
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...rest}
        ref={ref}
      >
        <MenuItem onClick={handleClose}>Option1</MenuItem>
        <MenuItem onClick={handleClose}>Option2</MenuItem>
        <MenuItem onClick={handleClose}>Option3</MenuItem>
      </MuiMenu>
    </div>
  );
};

export default React.forwardRef(Menu);
