import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Dialog as MuiDialog } from '@material-ui/core';

const dialogStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    maxWidth: '100%',
    maxHeight: theme.spacing(100),
    borderRadius: theme.shape.borderRadius
  }
}));

/**
 * @param { import('@material-ui/core/Dialog/Dialog').DialogProps} props
 * @param {React.Ref<any>} ref
 */
const Dialog = (props, ref) => {
  const dialogClasses = dialogStyles(props);
  return <MuiDialog classes={dialogClasses} ref={ref} {...props} />;
};

export default React.forwardRef(Dialog);
