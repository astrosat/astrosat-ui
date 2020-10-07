import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogActions as MuiDialogActions } from '@material-ui/core';

const actionsStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0, 2.5, 0)
  }
}));

/**
 * @param { import('@material-ui/core/DialogActions/DialogActions').DialogActionsProps} props
 * @param {React.Ref<any>} ref
 */
const DialogActions = (props, ref) => {
  const actionsClasses = actionsStyles({});
  return <MuiDialogActions classes={actionsClasses} {...props} />;
};

export default React.forwardRef(DialogActions);
