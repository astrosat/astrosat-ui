import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Pill, PillAction } from './pill.component';
import CloseIcon from '../icons/close-icon.component';

export default { title: 'Pill' };

export const WithData = () => <Pill>{text('Data', '1234')}</Pill>;

export const WithAction = () => (
  <Pill
    action={
      <PillAction>
        <CloseIcon />
      </PillAction>
    }
  >
    {text('Data', '1234')}
  </Pill>
);
