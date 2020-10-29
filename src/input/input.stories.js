import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as Input } from './input.component';
import { SearchIcon } from 'icons';

export default { title: 'Input' };

export const Default = () => <Input onChange={action('Input changed')} />;

export const Placeholder = () => (
  <Input onChange={action('Input changed')} placeholder="Test placeholder" />
);

export const Value = () => (
  <Input onChange={action('Input changed')} value="Test value" />
);

export const Disabled = () => (
  <Input onChange={action('Input changed')} disabled />
);

export const Valid = () => {
  return <Input onChange={action('Input changed')} valid />;
};

export const Invalid = () => {
  const valid = false;
  return <Input onChange={action('Input changed')} error={!valid} />;
};

export const Adornments = () => (
  <>
    <Input endAdornment={<SearchIcon />} />
    <Input startAdornment={<SearchIcon />} />
  </>
);

export const Multiline = args => <Input {...args} />;
Multiline.args = { multiline: true, disabled: false };
