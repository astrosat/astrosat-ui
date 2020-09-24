import React from 'react';

import { Link as MuiLink } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(6),
    color: theme.palette.primary.main,
    fontSize: theme.typography.button.fontSize,
    borderBottom: '2px solid #f6be00',
    padding: '0.5rem 0',
    textDecoration: 'none'
  }
}));

const Link = ({ ...rest }, ref) => {
  const classes = useStyles({});
  return <MuiLink ref={ref} classes={classes} {...rest} />;
};
export default React.forwardRef(Link);
