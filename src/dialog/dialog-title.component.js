import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogTitle as MuiDialogTitle } from '@material-ui/core';

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
  return <MuiDialogTitle classes={titleClasses} disableTypography {...props} />;
};

export default DialogTitle;
