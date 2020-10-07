import React from 'react';

import { action } from '@storybook/addon-actions';

import { default as Input } from './input.component';
import { default as InputAdornment } from './input-adornment.component';
import { default as InputLabel } from './input-label.component';
import { default as FormControl } from '../form-control/form-control.component';

import { ErrorIcon, CorrectIcon } from '../icons';

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
  let isValid = true;

  const adornment = (
    <InputAdornment
      Icon={isValid ? CorrectIcon : ErrorIcon}
      type={isValid ? 'success' : 'error'}
      onClick={action('Icon clicked')}
    />
  );

  return (
    <FormControl error={!isValid}>
      <Input
        onChange={action('Input changed')}
        endAdornment={adornment}
        valid={isValid}
      />
    </FormControl>
  );
};

export const Invalid = () => {
  let isValid = false;
  const adornment = (
    <InputAdornment
      Icon={isValid ? CorrectIcon : ErrorIcon}
      type={isValid ? 'success' : 'error'}
    />
  );

  return (
    <FormControl error={!isValid}>
      <Input
        onChange={action('Input changed')}
        endAdornment={adornment}
        valid={isValid}
      />
    </FormControl>
  );
};
