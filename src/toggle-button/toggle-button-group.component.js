import React from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';

/**
 * @param {import('@material-ui/lab').ToggleButtonGroupProps} props
 */
export const ToggleButtonGroup = ({
  children,
  orientation = 'horizontal',
  ...rest
}) => (
  <MuiToggleButtonGroup exclusive orientation={orientation} {...rest}>
    {children}
  </MuiToggleButtonGroup>
);
