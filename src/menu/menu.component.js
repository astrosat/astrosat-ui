import React from 'react';

import { styled } from '@mui/material/styles';

import { Menu as MuiMenu } from '@mui/material';

const PREFIX = 'MarkMenu';

const classes = {
  list: `${PREFIX}-list`,
};

const StyledMuiMenu = styled(MuiMenu)(({ theme }) => ({
  [`&.${classes.list}`]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: '5rem',
  },
}));

/**
 * @param {import('@mui/material').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = (props, ref) => {
  return <StyledMuiMenu className={classes.list} {...props} ref={ref} />;
  // return <StyledMuiMenu classes={classes} {...props} ref={ref} />;
};

export default React.forwardRef(Menu);
