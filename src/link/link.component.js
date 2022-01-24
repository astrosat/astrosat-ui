import React from 'react';

import { Link as MuiLink } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
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
const Link = (props, ref) => {
  const classes = useStyles(props);

  return <MuiLink ref={ref} classes={classes} {...props} />;
};
export default React.forwardRef(Link);
