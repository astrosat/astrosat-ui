import React from 'react';

import { Link as MuiLink, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '0.875rem',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    textDecoration: 'none',
    // fontWeight: theme.typography.button.fontWeight,
    // fontFamily: theme.typography.button.fontFamily,
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
