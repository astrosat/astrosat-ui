import React from 'react';

import Switch from './switch.component';

import { FormControlLabel } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';

export default { title: 'Switch' };

export const Color = () => (
  <FormGroup>
    <FormControlLabel
      label="Default Color"
      control={<Switch color="default" />}
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
      label="Disabled"
      control={<Switch disabled />}
    ></FormControlLabel>
  </FormGroup>
);

export const Size = () => (
  <FormGroup>
    <FormControlLabel
      label="Medium Size"
      control={<Switch size="medium" color="default" />}
    ></FormControlLabel>
    <FormControlLabel
      label="Small Size"
      control={<Switch size="small" color="default" />}
    ></FormControlLabel>
  </FormGroup>
);
