import React from 'react';

import { action } from '@storybook/addon-actions';

import { RadioGroup, FormControlLabel } from '@material-ui/core';

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

export const LabelPlacement = () => (
  <>
    <FormControlLabel label="end" labelPlacement="end" control={<Radio />} />
    <FormControlLabel
      label="bottom"
      labelPlacement="bottom"
      control={<Radio />}
    />
    <FormControlLabel
      label="start"
      labelPlacement="start"
      control={<Radio />}
    />
    <FormControlLabel label="top" labelPlacement="top" control={<Radio />} />
  </>
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
