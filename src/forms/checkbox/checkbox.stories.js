import React from 'react';
import Checkbox from './checkbox.component';

export default { title: 'Forms/Checkbox', component: Checkbox };

export const NoLabel = () => <Checkbox />;

export const Label = () => <Checkbox label="Checkbox" />;

export const Checked = () => <Checkbox label="Checkbox" checked />;

export const Disabled = () => <Checkbox label="Checkbox" disabled />;

export const CheckedAndDisabled = () => (
  <Checkbox label="Checkbox" checked disabled />
);
