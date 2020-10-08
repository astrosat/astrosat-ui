import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DialogContent as MuiDialogContent } from '@material-ui/core';

const contentStyles = makeStyles(() => ({
  root: {
    padding: '0',
    '&:first-child': {
      paddingTop: '0'
    }
  }
}));

/**
 * @param { import('@material-ui/core/DialogContent/DialogContent').DialogContentProps} props
 * @param {React.Ref<any>} ref
 */
const DialogContent = (props, ref) => {
  const contentClasses = contentStyles(props);
  return <MuiDialogContent ref={ref} classes={contentClasses} {...props} />;
};

export default React.forwardRef(DialogContent);
