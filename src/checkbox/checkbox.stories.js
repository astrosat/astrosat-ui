import React from 'react';

import { action } from '@storybook/addon-actions';

import { FormGroup, FormControlLabel } from '@mui/material';

import { default as Checkbox } from './checkbox.component';

const Index = { title: 'Checkbox' };

export default Index;

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

export const LabelPlacement = () => (
  <>
    <FormControlLabel label="end" labelPlacement="end" control={<Checkbox />} />
    <FormControlLabel
      label="bottom"
      labelPlacement="bottom"
      control={<Checkbox />}
    />
    <FormControlLabel
      label="start"
      labelPlacement="start"
      control={<Checkbox />}
    />
    <FormControlLabel label="top" labelPlacement="top" control={<Checkbox />} />
  </>
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
        control={<Checkbox name="Test Name" onChange={action('Checked')} />}
      />

      <FormControlLabel
        label="Checkbox Label"
        control={<Checkbox name="Test Name" onChange={action('Checked')} />}
      />

      <FormControlLabel
        label="Checkbox Label"
        control={<Checkbox name="Test Name" onChange={action('Checked')} />}
      />
    </FormGroup>
  );
};
