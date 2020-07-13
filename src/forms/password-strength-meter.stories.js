import React from 'react';
import { text } from '@storybook/addon-knobs';
import PasswordStrengthMeter from './password-strength-meter.component';

export default { title: 'Forms/Password Strength Meter' };

export const Strengths = () => (
  <>
    <PasswordStrengthMeter password="" />
    <PasswordStrengthMeter password="pa" />
    <PasswordStrengthMeter password="pandaconcrete" />
    <PasswordStrengthMeter password="pandaconcretespoon" />
  </>
);

export const Playground = () => (
  <PasswordStrengthMeter password={text('Password', '')} />
);
