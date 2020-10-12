import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as TextArea } from './text-area.component';

export default { title: 'TextArea' };

export const Default = () => <TextArea onChange={action('TextArea changed')} />;

export const Placeholder = () => (
  <TextArea
    onChange={action('TextArea changed')}
    placeholder="Test placeholder"
  />
);

export const Value = () => (
  <TextArea onChange={action('TextArea changed')} value="Test value" />
);

export const Disabled = () => (
  <TextArea onChange={action('TextArea changed')} disabled />
);

export const TenRowDefaultHeight = () => {
  return <TextArea onChange={action('TextArea changed')} rows={10} />;
};

export const NoDefaultFullWidth = () => {
  return <TextArea onChange={action('TextArea changed')} fullWidth={false} />;
};
