import React from 'react';

import { action } from '@storybook/addon-actions';

import { FormGroup } from '@material-ui/core';

import { default as FormControlLabel } from '../form-control-label/form-control-label.component';

import { default as Checkbox } from './checkbox.component';

export default { title: 'Checkbox' };

export const Default = () => (
  <FormControlLabel
    label="Checkbox"
    control={<Checkbox name="Test Name" onChange={action('Checked')} />}
  />
);

export const NoLabel = () => (
  <Checkbox name="Test Name" onChange={action('Checked')} />
);

export const Disabled = () => (
  <FormControlLabel
    label="Checkbox"
    control={
      <Checkbox name="Test Name" onChange={action('Checked')} disabled />
    }
  />
);

export const CheckedAndDisabled = () => (
  <FormControlLabel
    label="Checkbox"
    control={
      <Checkbox
        name="Test Name"
        onChange={action('Checked')}
        checked
        disabled
      />
    }
  />
);

export const CheckboxGroup = () => {
  return (
    <FormGroup>
      <FormControlLabel
        label="Checkbox Label"
        control={
          <Checkbox
            name="Test Name"
            label="Checkbox 1"
            onChange={action('Checked')}
          />
        }
      />

      <FormControlLabel
        label="Checkbox Label"
        control={
          <Checkbox
            name="Test Name"
            label="Checkbox 2"
            onChange={action('Checked')}
          />
        }
      />

      <FormControlLabel
        label="Checkbox Label"
        control={
          <Checkbox
            name="Test Name"
            label="Checkbox 3"
            onChange={action('Checked')}
          />
        }
      />
    </FormGroup>
  );
};
