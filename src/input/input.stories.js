import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as Input } from './input.component';
import { default as InputAdornment } from './input-adornment.component';
import { default as InputLabel } from './input-label.component';
import { default as FormControl } from '../form-control/form-control.component';

export default { title: 'Input' };

export const Default = () => <Input onChange={action('Input changed')} />;

export const Placeholder = () => (
  <Input onChange={action('Input changed')} placeholder="Test placeholder" />
);

export const Value = () => (
  <Input onChange={action('Input changed')} value="Test value" />
);

export const Label = () => (
  <FormControl>
    <InputLabel htmlFor="test-input">This is a label</InputLabel>
    <Input
      id="test-input"
      onChange={action('Input changed')}
      placeholder="Test label"
    />
  </FormControl>
);

export const Disabled = () => (
  <FormControl disabled>
    <Input onChange={action('Input changed')} />
  </FormControl>
);

export const Valid = () => {
  const valid = true;
  return (
    <FormControl error={!valid}>
      <Input
        onChange={action('Input changed')}
        endAdornment={<InputAdornment valid={valid} />}
        valid={valid}
      />
    </FormControl>
  );
};

export const Invalid = () => {
  const valid = false;
  return (
    <FormControl error={!valid}>
      <Input
        onChange={action('Input changed')}
        endAdornment={<InputAdornment valid={valid} />}
        valid={valid}
      />
    </FormControl>
  );
};
