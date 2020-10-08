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
 * @param {React.Ref<any>} ref
 */
const DialogTitle = ({ disableTypography, children, ...props }, ref) => {
  const titleClasses = titleStyles({});
  return (
    <MuiDialogTitle
      ref={ref}
      classes={titleClasses}
      disableTypography
      {...props}
    >
      {disableTypography ? (
        children
      ) : (
        <Typography variant="h4">{children}</Typography>
      )}
    </MuiDialogTitle>
  );
};

export default React.forwardRef(DialogTitle);
