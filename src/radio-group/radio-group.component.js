import React from 'react';

import { RadioGroup as MuiRadioGroup } from '@material-ui/core';

const RadioGroup = ({ children, ...props }) => {
  return <MuiRadioGroup {...props}>{children}</MuiRadioGroup>;
};

export default RadioGroup;
