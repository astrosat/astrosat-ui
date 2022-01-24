import React from 'react';

import Switch from './switch.component';

import { FormControlLabel } from '@mui/material';

import FormGroup from '@mui/material/FormGroup';

export default { title: 'Switch' };

export const Color = () => (
  <FormGroup>
    <FormControlLabel
      label="Default Color"
      control={<Switch />}
    ></FormControlLabel>
    <FormControlLabel
      label="Primary Color"
      control={<Switch color="primary" />}
    ></FormControlLabel>
    <FormControlLabel
      label="Secondary Color"
      control={<Switch color="secondary" />}
    ></FormControlLabel>
  </FormGroup>
);

export const Disabled = () => (
  <FormGroup>
    <FormControlLabel
      label="Disabled Off"
      control={<Switch disabled />}
    ></FormControlLabel>
    <FormControlLabel
      label="Disabled On"
      control={<Switch disabled defaultChecked />}
    ></FormControlLabel>
  </FormGroup>
);

export const Size = () => (
  <FormGroup>
    <FormControlLabel
      label="Medium Size"
      control={<Switch size="medium" />}
    ></FormControlLabel>
    <FormControlLabel
      label="Small Size"
      control={<Switch size="small" />}
    ></FormControlLabel>
  </FormGroup>
);
