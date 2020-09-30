import React from 'react';

import { FormControlLabel as MuiFormControlLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const labelStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    '& .Mui-disabled': {
      color: theme.palette.text.primary,
      opacity: 0.4
    },
    '&$disabled': {
      cursor: 'not-allowed'
    },
    margin: 0,
    minHeight: '1.4375rem'
  },
  disabled: {}
}));

const FormControlLabel = props => {
  const labelClasses = labelStyles({});
  return <MuiFormControlLabel classes={labelClasses} {...props} />;
};

export default FormControlLabel;