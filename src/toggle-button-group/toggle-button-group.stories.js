import React from 'react';

import ToggleButtonGroup from './toggle-button-group.component';

const defaultButtons = [
  {
    textContent: 'Button 1',
    props: {
      selected: true,
      onClick: () => console.log('Clicked button 1')
    }
  },
  {
    textContent: 'Button 2',
    props: {
      selected: false,
      onClick: () => console.log('Clicked button 2')
    }
  }
];

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

const renderButtons = ({ buttons }) => {
  return (
    <div style={{ maxWidth: '19rem' }}>
      <ToggleButtonGroup buttons={buttons} />
    </div>
  );
};

export default {
  title: 'ToggleButtonGroup',
  component: ToggleButtonGroup
};

export const Default = () => renderButtons({ buttons: defaultButtons });

export const LotsOfButtons = () =>
  renderButtons({
    buttons: [
      ...defaultButtons,
      ...defaultButtons,
      {
        textContent: 'I am short',
        props: {
          selected: true,
          onClick: () => console.log('Clicked short button')
        }
      }
    ]
  });

export const MixedButtons = () => renderButtons({ buttons: mixedButtons });
