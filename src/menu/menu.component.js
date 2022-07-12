import React from 'react';

import { styled } from '@mui/material/styles';

import { Menu as MuiMenu } from '@mui/material';

const PREFIX = 'Menu';

const classes = {
  list: `${PREFIX}-list`,
};

const StyledMuiMenu = styled(MuiMenu)(({ theme }) => ({
  [`& .${classes.list}`]: {
    backgroundColor: '#5d666e',
    marginLeft: theme.spacing(-0.25),
    marginRight: theme.spacing(-0.5),
    marginTop: '-10px',
    padding: '5rem',
  },
}));

/**
 * @param {import('@mui/material').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = (props, ref) => {
  return <StyledMuiMenu className={classes.list} {...props} ref={ref} />;
};

export default React.forwardRef(Menu);
