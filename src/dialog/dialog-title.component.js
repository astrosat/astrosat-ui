import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogTitle as MuiDialogTitle, Typography } from '@material-ui/core';

const titleStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    fontSize: theme.typography.pxToRem(24),
    fontWeight: 'bold',
    height: theme.spacing(14),
    width: '100%',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main
  }
}));

/**
 * @param { import('@material-ui/core/DialogTitle/DialogTitle').DialogTitleProps} props
 */

const DialogTitle = props => {
  const titleClasses = titleStyles({});
  return (
    <Typography color="textPrimary" variant="body2">
      <MuiDialogTitle classes={titleClasses} {...props} />
    </Typography>
  );
};

export default DialogTitle;
