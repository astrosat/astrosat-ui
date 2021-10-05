import React from 'react';

import {
  DialogTitle as MuiDialogTitle,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = (/** @type {import('@material-ui/core').Theme} */ theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    padding: theme.spacing(5, 3),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '& .content': {
      fontSize: theme.typography.pxToRem(24)
    }
  }
});

/**
 * @param { import('@material-ui/core/DialogTitle/DialogTitle').DialogTitleProps } props
 * @param {React.Ref<any>} ref
 */
const DialogTitle = (
  { disableTypography, children, classes, ...rest },
  ref
) => {
  return (
    <MuiDialogTitle
      className={classes.root}
      ref={ref}
      disableTypography
      {...rest}
    >
      {disableTypography ? (
        children
      ) : (
        <Typography className="content" variant="h1">
          {children}
        </Typography>
      )}
    </MuiDialogTitle>
  );
};

export default withStyles(styles)(React.forwardRef(DialogTitle));
