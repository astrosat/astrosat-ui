import React from 'react';

import { FormControl as MuiFormControl } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const formControlStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

/**
 * @param {import('@material-ui/core').FormControlProps} props
 */
const FormControl = ({ fullWidth = true, ...rest }) => {
  // const formControlClasses = formControlStyles(props);
  return <MuiFormControl fullWidth={fullWidth} {...rest} />;
};

export default FormControl;
