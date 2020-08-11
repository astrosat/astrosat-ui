import React from 'react';

import CheckedInput from './checked-input/checked-input.component';

const Checkbox = (props, ref) => (
  <CheckedInput type="checkbox" ref={ref} {...props} />
);

export default React.forwardRef(Checkbox);
