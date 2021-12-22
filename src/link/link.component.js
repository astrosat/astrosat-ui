import React from 'react';

import { Link as MuiLink } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

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
 * @param {import('@material-ui/core').LinkProps} props
 * @param {React.Ref<any>} ref
 */
const Link = (props, ref) => {
  const classes = useStyles(props);

  return <MuiLink ref={ref} classes={classes} {...props} />;
};
export default React.forwardRef(Link);
