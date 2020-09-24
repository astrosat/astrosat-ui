import React from 'react';

import { action } from '@storybook/addon-actions';

import { FormGroup } from '@material-ui/core';

import { default as Checkbox } from './checkbox.component';

export default { title: 'Checkbox' };

export const Default = () => (
  <Checkbox
    name="Test Name"
    label="Checkbox Label"
    onChange={action('Checked')}
  />
);

export const NoLabel = () => (
  <Checkbox name="Test Name" onChange={action('Checked')} />
);

export const Disabled = () => (
  <Checkbox
    name="Test Name"
    label="Checkbox Label"
    onChange={action('Checked')}
    disabled
  />
);

export const CheckedAndDisabled = () => (
  <Checkbox
    name="Test Name"
    label="Checkbox Label"
    onChange={action('Checked')}
    checked
    disabled
  />
);

export const CheckboxGroup = () => {
  return (
    <FormGroup>
      <Checkbox
        name="Test Name"
        label="Checkbox 1"
        onChange={action('Checked')}
      />
      <Checkbox
        name="Test Name"
        label="Checkbox 2"
        onChange={action('Checked')}
      />
      <Checkbox
        name="Test Name"
        label="Checkbox 3"
        onChange={action('Checked')}
      />
    </FormGroup>
  );
};
