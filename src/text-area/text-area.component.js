import React from 'react';

import { Input, makeStyles } from '@material-ui/core';

const textAreaStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    '&$disabled': {
      backgroundColor: theme.palette.common.white,
      opacity: '0.3',
      cursor: 'not-allowed'
    }
  },
  inputMultiline: {
    '&$disabled': {
      cursor: 'not-allowed'
    }
  },
  disabled: {}
}));

/**
 * @param {Omit<import('../input/input.component.js').InputProps, 'multiline', 'aria-multiline'> } props
 */
const TextArea = ({ fullWidth = true, rows = 7, ...props }) => {
  const textAreaClasses = textAreaStyles(props);
  return (
    <Input
      classes={textAreaClasses}
      fullWidth={fullWidth}
      rows={rows}
      multiline
      aria-multiline
      {...props}
    />
  );
};

export default TextArea;
