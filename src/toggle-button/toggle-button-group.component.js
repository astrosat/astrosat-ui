import React from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';

export const ToggleButtonGroup = ({ children }) => (
  <MuiToggleButtonGroup
    exclusive
    orientation={children.length > 2 ? 'vertical' : 'horizontal'}
  >
    {children}
  </MuiToggleButtonGroup>
);
