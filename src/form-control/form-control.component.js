import React from 'react';

import { FormControl as MuiFormControl } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const formControlStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

const FormControl = props => {
  const formControlClasses = formControlStyles({});
  return <MuiFormControl classes={formControlClasses} {...props} />;
};

export default FormControl;
