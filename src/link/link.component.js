import React from 'react';

import { Link as MuiLink } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `0.0625em solid ${theme.palette.primary.main}`,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      borderBottom: 'none'
    },
    '&:visited': {
      color: theme.palette.primary.main
    }
  }
}));

const Link = (props, ref) => {
  const classes = useStyles({});

  return <MuiLink ref={ref} classes={classes} {...props} />;
};
export default React.forwardRef(Link);
