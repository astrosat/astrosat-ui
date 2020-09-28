import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as RadioGroup } from '../radio-group/radio-group.component';

import { default as FormControlLabel } from '../form-control-label/form-control-label.component';

import { default as Radio } from './radio.component';

export default { title: 'Radio' };

export const Default = () => (
  <FormControlLabel
    label="Radio"
    control={<Radio name="Radio 1" value="Radio 1" />}
  />
);

export const NoLabel = () => <Radio name="Test Name" />;

export const Disabled = () => (
  <FormControlLabel
    label="Radio"
    control={<Radio name="Radio 2" value="Radio 2" disabled />}
  />
);

export const CheckedAndDisabled = () => (
  <FormControlLabel
    label="Radio"
    control={<Radio name="Radio 3" value="Radio 3" checked disabled />}
  />
);

export const AsRadioGroup = () => {
  return (
    <RadioGroup onChange={action('Radio Selected')}>
      <FormControlLabel
        label="Radio 1"
        control={<Radio name="Radio 1" value="Radio 1" />}
      />

      <FormControlLabel
        label="Radio 2"
        control={<Radio name="Radio 2" value="Radio 2" />}
      />

      <FormControlLabel
        label="Radio 3"
        control={<Radio name="Radio 3" value="Radio 3" />}
      />
    </RadioGroup>
  );
};
