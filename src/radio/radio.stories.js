import React from 'react';

import { action } from '@storybook/addon-actions';

import { FormGroup } from '@material-ui/core';

import { default as FormControlLabel } from '../form-control-label/form-control-label.component';

import { default as Radio } from './radio.component';

export default { title: 'Radio' };

export const Default = () => (
  <FormControlLabel
    label="Radio"
    control={<Radio name="Test Name" onChange={action('Checked')} />}
  />
);

export const NoLabel = () => (
  <Radio name="Test Name" onChange={action('Checked')} />
);

export const Disabled = () => (
  <FormControlLabel
    label="Radio"
    control={<Radio name="Test Name" onChange={action('Checked')} disabled />}
  />
);

export const CheckedAndDisabled = () => (
  <FormControlLabel
    label="Radio"
    control={
      <Radio name="Test Name" onChange={action('Checked')} checked disabled />
    }
  />
);

export const RadioGroup = () => {
  return (
    <FormGroup>
      <FormControlLabel
        label="Radio"
        control={
          <Radio
            name="Test Name"
            label="Radio 1"
            onChange={action('Checked')}
          />
        }
      />

      <FormControlLabel
        label="Radio"
        control={
          <Radio
            name="Test Name"
            label="Radio 2"
            onChange={action('Checked')}
          />
        }
      />

      <FormControlLabel
        label="Radio"
        control={
          <Radio
            name="Test Name"
            label="Radio 3"
            onChange={action('Checked')}
          />
        }
      />
    </FormGroup>
  );
};
