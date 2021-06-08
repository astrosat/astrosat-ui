import React from 'react';
import { ToggleButtonGroup } from '../proxies';
import ToggleButton from './toggle-button.component';

const twoButtons = ['Button 1', 'Button 2'];

const renderButtons = (array, selected) => (
  <ToggleButtonGroup exclusive value={selected}>
    {array.map((text, i) => (
      <ToggleButton
        key={text}
        value={text}
        selected={i === 0}
        disabled={i === 2}
      >
        {text}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export default {
  title: 'ToggleButton',
  component: ToggleButton
};

export const Default = () => renderButtons(twoButtons);

export const ThreeButtons = () => renderButtons([...twoButtons, 'Button 3']);

export const SevenButtons = () =>
  renderButtons(new Array(7).fill(undefined).map((_, i) => `Button ${i + 1}`));
