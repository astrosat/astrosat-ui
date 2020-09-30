import React, { useState } from 'react';

import { Switch as MuiSwitch } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

const Switch = (props, ref) => {
  const classes = useStyles({});
  return <MuiSwitch ref={ref} classes={classes} {...props} />;
};
export default React.forwardRef(Switch);
