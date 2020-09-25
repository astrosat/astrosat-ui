import React from 'react';

import { FormControlLabel as MuiFormControlLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const labelStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
    '& .Mui-disabled': {
      color: theme.palette.secondary.main,
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

const FormControlLabel = ({ label = '', control = {} }) => {
  const labelClasses = labelStyles({});
  return (
    <MuiFormControlLabel
      classes={labelClasses}
      control={control}
      label={label}
    />
  );
};

export default FormControlLabel;
