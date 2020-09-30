import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as TextField } from './text-field.component';

export default { title: 'TextField' };

export const Default = () => <TextField onChange={action('Input changed')} />;

export const Placeholder = () => (
  <TextField
    onChange={action('Input changed')}
    placeholder="This is a placeholder"
  />
);

export const Value = () => (
  <TextField onChange={action('Input changed')} value="This is a value" />
);

export const Disabled = () => (
  <TextField onChange={action('Input changed')} disabled />
);

export const Invalid = () => {
  const isInvalid = true;
  return <TextField onChange={action('Input changed')} error={isInvalid} />;
};
