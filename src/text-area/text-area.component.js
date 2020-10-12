import React from 'react';

import { Input, makeStyles } from '@material-ui/core';

const textAreaStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
    padding: theme.typography.pxToRem(16),
    borderRadius: theme.typography.pxToRem(16),
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.1)',
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    }
  },
  inputMultiline: {
    '&$disabled': {
      backgroundColor: 'rgba(239, 239, 239, 0.3)',
      cursor: 'not-allowed'
    }
  },
  disabled: {}
}));

/**
 * @param {import('../input/input.component.js').InputProps} props
 */
const TextArea = ({ fullWidth = true, rows = 7, ...props }) => {
  const textAreaClasses = textAreaStyles(props);
  return (
    <Input
      classes={textAreaClasses}
      fullWidth={fullWidth}
      rows={rows}
      multiline
      {...props}
    />
  );
};

export default TextArea;
