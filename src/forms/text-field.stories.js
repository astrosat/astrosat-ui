import React from 'react';
import TextField from './text-field.component';

export default { title: 'Forms/Text Field' };

export const Default = () => <TextField />;

export const Value = () => <TextField value="Test content" />;

export const Placeholder = () => <TextField placeholder="Test placeholder" />;

export const Valid = () => <TextField valid />;

export const Invalid = () => <TextField valid={false} />;

export const Disabled = () => <TextField disabled />;
