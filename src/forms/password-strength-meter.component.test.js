import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import PasswordStrengthMeter from './password-strength-meter.component';

describe('Password Strength Meter Component', () => {
  afterEach(cleanup);

  it('should render a `Empty` Password Strength Meter with recommendations', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="test" />
    );

    expect(getByText('Empty')).toBeInTheDocument();
    expect(container.querySelector('meter')).toHaveClass('meter');
    expect(container.querySelector('meter')).toHaveAttribute('value', '0');
    expect(container.querySelector('meter')).toHaveAttribute('max', '4');
  });

  it('should render a `Weak` Password Strength Meter with recommendations', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcrete" />
    );

    expect(getByText('Weak')).toBeInTheDocument();
    expect(container.querySelector('meter')).toHaveClass('meter');
    expect(container.querySelector('meter')).toHaveAttribute('value', '2');
  });

  it('should render a `Fair` Password Strength Meter', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="9anDAc0nt" />
    );

    expect(getByText('Fair')).toBeInTheDocument();
    expect(container.querySelector('meter')).toHaveClass('meter');
    expect(container.querySelector('meter')).toHaveAttribute('value', '3');
  });

  it('should render a `Strong` Password Strength Meter with recommendations', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcretespoon" />
    );

    expect(getByText('Strong')).toBeInTheDocument();
    expect(container.querySelector('meter')).toHaveClass('meter ');
    expect(container.querySelector('meter')).toHaveAttribute('value', '4');
  });
});
