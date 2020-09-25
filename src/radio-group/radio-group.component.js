import React from 'react';

import { RadioGroup as MuiRadioGroup } from '@material-ui/core';

const RadioGroup = ({ props, children }) => {
  return <MuiRadioGroup {...props}>{children}</MuiRadioGroup>;
};

export default RadioGroup;
