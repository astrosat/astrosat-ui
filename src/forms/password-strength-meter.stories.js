import React from 'react';
import { text } from '@storybook/addon-knobs';
import PasswordStrengthMeter from './password-strength-meter.component';

export default { title: 'Password Strength Meter' };

export const Strengths = () => (
  <>
    <PasswordStrengthMeter password="" />
    <PasswordStrengthMeter password="In+ut0dR" />
    <PasswordStrengthMeter password="wordsownt3+B" />
    <PasswordStrengthMeter password="wordsowncateract" />
  </>
);

export const Playground = () => (
  <PasswordStrengthMeter password={text('Password', '')} />
);
