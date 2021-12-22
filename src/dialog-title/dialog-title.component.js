import React from 'react';

import {
  DialogTitle as MuiDialogTitle,
  Typography,
  withStyles,
} from '@material-ui/core';
import IconButton from '../icon-button/icon-button.component';
import { CloseIcon } from 'icons';

const styles = (/** @type {import('@material-ui/core').Theme} */ theme) => ({
  root: {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    gridAutoFlow: 'row',
    padding: theme.spacing(5, 3),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '& .content': {
      fontSize: theme.typography.pxToRem(24),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

/**
 * @param {import('@material-ui/core/DialogTitle/DialogTitle').DialogTitleProps
 *  & {onClose?: React.MouseEventHandler<HTMLButtonElement>}
 * } props
 * @param {React.Ref<any>} ref
 */
const DialogTitle = (
  { disableTypography, children, classes, onClose, ...rest },
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
      {onClose ? (
        <IconButton
          aria-label="Close Dialog"
          // @ts-ignore
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

// @ts-ignore
export default withStyles(styles)(React.forwardRef(DialogTitle));
