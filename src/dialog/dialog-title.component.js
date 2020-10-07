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
 * @param { import('@material-ui/core/DialogTitle/DialogTitle').DialogTitleProps } props
 */

const DialogTitle = ({ disableTypography, children, ...props }) => {
  const titleClasses = titleStyles({});
  return (
    <MuiDialogTitle classes={titleClasses} disableTypography {...props}>
      {disableTypography ? (
        children
      ) : (
        <Typography variant="h4">{children}</Typography>
      )}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
