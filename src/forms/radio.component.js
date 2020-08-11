import React, { forwardRef } from 'react';

import CheckedInput from './checked-input/checked-input.component';

const Radio = (props, ref) => (
  <CheckedInput type="radio" ref={ref} {...props} />
);

export default forwardRef(Radio);
