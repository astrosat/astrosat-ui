import React from 'react';

import { styled } from '@mui/material/styles';

import { MenuItem as MuiMenuItem } from '@mui/material';
const PREFIX = 'menu-item';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledMuiMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: '0.2rem 0.5rem',
    margin: '0.1rem 0.15rem',
    backgroundColor: '#5d666e',
    ':hover': {
      backgroundColor: 'rgb(71, 82, 90)',
    },
    '& + &': {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
  },
}));

/**
 * @param {Omit <import('@mui/material').MenuItemProps, "button">} props
 * @param {React.Ref<any>} ref
 */

const MenuItem = (props, ref) => {
  return <StyledMuiMenuItem className={classes.root} {...props} ref={ref} />;
};

export default React.forwardRef(MenuItem);
