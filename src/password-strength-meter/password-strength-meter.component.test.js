import React from 'react';

import { render, screen } from 'test/test-utils';

import PasswordStrengthMeter from './password-strength-meter.component';

describe('Password Strength Meter Component', () => {
  it('does not render text when password is empty', () => {
    render(<PasswordStrengthMeter />);
    expect(screen.queryByText('Weak')).not.toBeInTheDocument();
    expect(screen.queryByText('Fair')).not.toBeInTheDocument();
    expect(screen.queryByText('Strong')).not.toBeInTheDocument();
  });

  it('shows the text "Weak" with a password score of 0', () => {
    render(<PasswordStrengthMeter password="pa" />);
    expect(screen.getByText('Weak')).toBeInTheDocument();
  });

  it('shows the text "Weak" with a password score of 1', () => {
    render(<PasswordStrengthMeter password="pand" />);

    expect(screen.getByText('Weak')).toBeInTheDocument();
  });

  it('shows the text "Fair" with a password score of 2', () => {
    render(<PasswordStrengthMeter password="pandaconcrete" />);

    expect(screen.getByText('Fair')).toBeInTheDocument();
  });

  it('shows the text "Fair" with a password score of 3', () => {
    render(<PasswordStrengthMeter password="pandaconcretesp" />);

    expect(screen.getByText('Fair')).toBeInTheDocument();
  });

  it('shows the text "Strong" with a password score of 4', () => {
    render(<PasswordStrengthMeter password="pandaconcretespoon" />);

    expect(screen.getByText('Strong')).toBeInTheDocument();
  });
});
