import React from 'react';

import Switch from './switch.component';
import { default as OldSwitch } from '../buttons/switch.component';

export default { title: 'Switch' };

export const Color = () => (
  <>
    <OldSwitch />
    <Switch />
    <Switch color="default" />
    <Switch color="primary" />
    <Switch color="secondary" />
  </>
);

export const Disabled = () => <Switch disabled />;

export const Size = () => (
  <>
    <Switch size="medium" />
    <Switch size="small" />
  </>
);
