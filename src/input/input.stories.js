import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as Input } from './input.component';

import { default as InputAdornment } from './input-adornment.component';

import { ErrorIcon } from '../icons';

export default { title: 'Input' };

export const Default = () => <Input onChange={action('Input changed')} />;

export const Placeholder = () => (
  <Input
    onChange={action('Input changed')}
    placeholder="This is a placeholder"
  />
);

export const Value = () => (
  <Input onChange={action('Input changed')} value="This is a value" />
);

export const Disabled = () => (
  <Input onChange={action('Input changed')} disabled />
);

export const Invalid = () => {
  const [entry, setEntry] = React.useState(0);
  const isInvalid = entry.length > 3;

  const adornment = (
    <InputAdornment
      Icon={ErrorIcon}
      type="error"
      onClick={action('Icon clicked')}
    />
  );

  return (
    <Input
      onChange={e => setEntry(e.target.value)}
      endAdornment={isInvalid && adornment}
      error={isInvalid}
    />
  );
};
