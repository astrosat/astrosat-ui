import React from 'react';

import { action } from '@storybook/addon-actions';

import { FormGroup } from '@material-ui/core';

import { default as FormLabel } from '../FormControlLabel/form-control-label.component';

import { default as Checkbox } from './checkbox.component';

export default { title: 'Checkbox' };

export const Default = () => (
  <FormLabel
    label="Checkbox Label"
    control={<Checkbox name="Test Name" onChange={action('Checked')} />}
  />
);

export const NoLabel = () => (
  <Checkbox name="Test Name" onChange={action('Checked')} />
);

export const Disabled = () => (
  <FormLabel
    label="Checkbox Label"
    control={
      <Checkbox name="Test Name" onChange={action('Checked')} disabled />
    }
  />
);

export const CheckedAndDisabled = () => (
  <FormLabel
    label="Checkbox Label"
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
      <FormLabel
        label="Checkbox Label"
        control={
          <Checkbox
            name="Test Name"
            label="Checkbox 1"
            onChange={action('Checked')}
          />
        }
      />

      <FormLabel
        label="Checkbox Label"
        control={
          <Checkbox
            name="Test Name"
            label="Checkbox 2"
            onChange={action('Checked')}
          />
        }
      />

      <FormLabel
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
