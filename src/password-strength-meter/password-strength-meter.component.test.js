import React from 'react';
import { cleanup, render } from '@testing-library/react';

import PasswordStrengthMeter from './password-strength-meter.component';

describe('Password Strength Meter Component', () => {
  afterEach(cleanup);

  it('does not render text when password is empty', () => {
    const { queryByText } = render(<PasswordStrengthMeter />);
    expect(queryByText('Weak')).not.toBeInTheDocument();
    expect(queryByText('Fair')).not.toBeInTheDocument();
    expect(queryByText('Strong')).not.toBeInTheDocument();
  });

  it('shows the text "Weak" with a password score of 0', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pa" />
    );
    expect(getByText('Weak')).toBeInTheDocument();
  });

  it('shows the text "Weak" with a password score of 1', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pand" />
    );

    expect(getByText('Weak')).toBeInTheDocument();
  });

  it('shows the text "Fair" with a password score of 2', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcrete" />
    );

    expect(getByText('Fair')).toBeInTheDocument();
  });

  it('shows the text "Fair" with a password score of 3', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcretesp" />
    );

    expect(getByText('Fair')).toBeInTheDocument();
  });

  it('shows the text "Strong" with a password score of 4', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcretespoon" />
    );

    expect(getByText('Strong')).toBeInTheDocument();
  });
});
