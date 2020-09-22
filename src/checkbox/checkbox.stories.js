import React from 'react';

import { action } from '@storybook/addon-actions';

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
    disabled={true}
  />
);
