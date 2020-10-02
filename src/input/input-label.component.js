import React from 'react';

import { InputLabel as MuiInputLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const LabelStyles = makeStyles(() => ({
  root: {}
}));

const InputLabel = props => {
  const labelClasses = LabelStyles({});
  return <MuiInputLabel classes={labelClasses} {...props} />;
};

export default InputLabel;
