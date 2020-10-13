import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as PasswordInput } from './password-input.component';

export default { title: 'PasswordInput' };

export const Default = () => (
  <PasswordInput onChange={action('PasswordInput changed')} />
);

export const Placeholder = () => (
  <PasswordInput
    onChange={action('PasswordInput changed')}
    placeholder="Test placeholder"
  />
);

export const Value = () => (
  <PasswordInput
    onChange={action('PasswordInput changed')}
    value="Test value"
  />
);

export const Disabled = () => (
  <PasswordInput onChange={action('PasswordInput changed')} disabled />
);

export const Valid = () => {
  return <PasswordInput onChange={action('PasswordInput changed')} valid />;
};

export const Invalid = () => {
  const valid = false;
  return (
    <PasswordInput onChange={action('PasswordInput changed')} error={!valid} />
  );
};
