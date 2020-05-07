import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Pill, PillAction } from './pill.component';
import { CloseIcon, CogIcon } from '../icons';

import styles from './pill-story.module.css';

export default { title: 'Pill' };

export const WithText = () => <Pill>{text('Text', '1234')}</Pill>;

export const WithAction = () => (
  <Pill
    action={
      <PillAction onClick={action('onClick')}>
        <CloseIcon />
      </PillAction>
    }
  >
    {text('Text', '1234')}
  </Pill>
);

export const Customised = () => (
  <div className={styles.customPill}>
    <Pill
      action={
        <PillAction onClick={action('onClick')}>
          <CogIcon />
        </PillAction>
      }
    >
      {text('Text', 'All colors')}
    </Pill>
  </div>
);
