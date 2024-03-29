import { Input } from '..';
import React, { useState } from 'react';
import PasswordStrengthMeter from './password-strength-meter.component';

const Index = { title: 'Password Strength Meter' };

export default Index;

export const Strengths = () => (
  <>
    <PasswordStrengthMeter password="" />
    <PasswordStrengthMeter password="panda" />
    <PasswordStrengthMeter password="pandaconcrete" />
    <PasswordStrengthMeter password="pandaconcretespoon" />
  </>
);

export const Transitions = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Input onChange={e => setValue(e.target.value)} />
      <PasswordStrengthMeter password={value} />
    </>
  );
};
