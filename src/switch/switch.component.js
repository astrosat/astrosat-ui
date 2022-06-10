import React from 'react';

import { Switch as MuiSwitch } from '@mui/material';

/**
 * @param {import('@mui/material').SwitchProps} props
 * @param {React.Ref<any>} ref
 */
const Switch = ({ color = 'default', ...rest }, ref) => {
  const component = <MuiSwitch color={color} ref={ref} {...rest} />;
  return rest.disabled ? (
    <span style={{ cursor: 'not-allowed' }}>{component}</span>
  ) : (
    component
  );
};

export default React.forwardRef(Switch);
