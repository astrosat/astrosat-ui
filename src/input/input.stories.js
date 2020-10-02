import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as Input } from './input.component';
import { default as InputAdornment } from './input-adornment.component';
import { default as InputLabel } from './input-label.component';
import { default as FormControl } from '../form-control/form-control.component';

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
  <FormControl>
    <Input onChange={action('Input changed')} value="This is a value" />
  </FormControl>
);

export const Label = () => (
  <FormControl>
    <InputLabel htmlFor="test-input">This is a label</InputLabel>
    <Input
      id="test-input"
      onChange={action('Input changed')}
      placeholder="This one has a label"
    />
  </FormControl>
);

export const Disabled = () => (
  <FormControl disabled>
    <Input onChange={action('Input changed')} />
  </FormControl>
);

export const Invalid = () => {
  const isValid = false;

  const adornment = (
    <InputAdornment
      Icon={ErrorIcon}
      type="error"
      onClick={action('Icon clicked')}
    />
  );

  return (
    <FormControl error={!isValid}>
      <Input
        onChange={action('Input changed')}
        endAdornment={!isValid && adornment}
      />
    </FormControl>
  );
};
