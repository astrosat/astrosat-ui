import React from 'react';
import InputLabel from './input-label.component';

export default { title: 'InputLabel' };

export const Color = () => (
  <>
    <InputLabel color="primary">Primary</InputLabel>
    <InputLabel color="secondary">Secondary</InputLabel>
  </>
);

export const Disabled = () => <InputLabel disabled>Disabled</InputLabel>;

export const Error = () => <InputLabel error>Error</InputLabel>;

export const Required = () => <InputLabel required>Required</InputLabel>;
