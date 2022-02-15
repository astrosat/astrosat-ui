import React from 'react';

import { styled } from '@mui/material/styles';

import { Link as MuiLink } from '@mui/material';

const PREFIX = 'Link';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledMuiLink = styled(MuiLink)(({ theme }) => ({
  [`&.${classes.root}`]: {
    borderBottom: `0.0625em solid ${theme.palette.primary.main}`,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      borderBottomColor: 'transparent',
    },
    '&:visited': {
      color: theme.palette.primary.main,
    },
  },
}));

/**
 * @param {import('@mui/material').LinkProps} props
 * @param {React.Ref<any>} ref
 */
const Link = (props, ref) => (
  <StyledMuiLink ref={ref} className={classes.root} {...props} />
);

export default React.forwardRef(Link);
