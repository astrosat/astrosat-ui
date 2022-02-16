import React from 'react';

import { styled } from '@mui/material/styles';

import { MenuItem as MuiMenuItem } from '@mui/material';
const PREFIX = 'MuiMenuItem';

const classes = {
  root: `${PREFIX}-root`
};

const StyledMuiMenuItem = styled(MuiMenuItem)((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    padding: '0.25rem 0.5rem',
    margin: '0 0.5rem',
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
  }
}));

/**
 * @param {Omit <import('@mui/material').MenuItemProps, "button">} props
 * @param {React.Ref<any>} ref
 */

const MenuItem = (props, ref) => {
  return <StyledMuiMenuItem {...props} ref={ref} />;
};

export default React.forwardRef(MenuItem);
