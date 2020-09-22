import React from 'react';
import Link from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {}
}));

export default function Links() {
  const classes = styles();
  const preventDefault = event => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault}>
        Link
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2">
        {'variant="body2"'}
      </Link>
    </Typography>
  );
}
