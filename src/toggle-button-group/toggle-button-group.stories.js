import React from 'react';

import ToggleButtonGroup from './toggle-button-group.component';

const generateButtons = n => {
  const isSelected = Math.floor(Math.random() * n);
  return new Array(n).fill().map((_, i) => ({
    textContent: `Button ${i + 1}`,
    props: {
      selected: i === isSelected,
      onClick: () => console.log(`Clicked Button ${i + 1}`)
    }
  }));
};

const mixedButtons = [
  {
    textContent: 'I am short',
    props: {
      selected: true,
      onClick: () => console.log('Clicked short button')
    }
  },
  {
    textContent: 'I am very very very long',
    props: {
      onClick: () => console.log('Clicked long button')
    }
  },
  {
    textContent: 'Iamverylongandunbrokentext',
    props: {
      disabled: true,
      onClick: () => console.log('Clicked unbroken button')
    }
  }
];

const renderButtons = buttons => {
  return <ToggleButtonGroup buttons={buttons} />;
};

export default {
  title: 'ToggleButtonGroup',
  component: ToggleButtonGroup
};

export const Default = () => renderButtons(generateButtons(2));

export const LotsOfButtons = () => renderButtons(generateButtons(7));

export const MixedButtons = () => renderButtons(mixedButtons);
