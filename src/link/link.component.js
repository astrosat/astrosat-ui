import React from 'react';

import { Link as MuiLink } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // marginLeft: theme.spacing(2),
    color: theme.palette.secondary.main,
    fontSize: '0.875rem',
    borderBottom: '2px solid #f6be00',
    padding: '0.5rem 0',
    textDecoration: 'none',
    fontWeight: 600,
    fontFamily: '"Open Sans", sans-serif',
    '&:hover': {
      color: theme.palette.secondary.main,
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
