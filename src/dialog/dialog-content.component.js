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
 */

const DialogContent = props => {
  const contentClasses = contentStyles({});
  return <MuiDialogContent classes={contentClasses} {...props} />;
};

export default DialogContent;
