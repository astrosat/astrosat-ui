import React from 'react';

import { Switch as MuiSwitch } from '@mui/material';

/**
 * @param {import('@mui/material').SwitchProps} props
 * @param {React.Ref<any>} ref
 */
const Switch = ({ color = 'default', disabled = false, ...rest }, ref) => {
  const component = (
    <MuiSwitch color={color} ref={ref} disabled={disabled} {...rest} />
  );
  return disabled ? (
    <span style={{ cursor: 'not-allowed' }}>{component}</span>
  ) : (
    component
  );
};

export default React.forwardRef(Switch);
