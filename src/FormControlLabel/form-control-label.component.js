import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';

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

const FormLabel = ({ label, control }) => {
  const labelClasses = labelStyles({});
  return (
    <FormControlLabel classes={labelClasses} control={control} label={label} />
  );
};

export default FormLabel;
