import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogTitle as MuiDialogTitle, Typography } from '@material-ui/core';

const titleStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    height: theme.spacing(14),
    width: '100%',
    backgroundColor: theme.palette.primary.main
  }
}));

/**
 * @param { Omit<import('@material-ui/core/DialogTitle/DialogTitle').DialogTitleProps, 'disableTypography'> } props
 */

const DialogTitle = props => {
  const titleClasses = titleStyles({});
  return (
    <MuiDialogTitle classes={titleClasses} disableTypography {...props}>
      <Typography variant="h4">{props.children}</Typography>
    </MuiDialogTitle>
  );
};

export default DialogTitle;
