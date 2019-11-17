import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import Button from './button.component';
import CloseButton from './close-button.component';
import InfoButton from './info-button.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <div className={select('theme', themes, styles.dark)}>
      <div className={styles.btnGroup}>
        <Button theme="primary" onClick={action('clicked')}>
          Primary
        </Button>
        <Button theme="secondary" onClick={action('clicked')}>
          Secondary
        </Button>
        <Button theme="tertiary" onClick={action('clicked')}>
          Tertiary
        </Button>
        <Button theme="disabled" onClick={action('clicked')} disabled={true}>
          Disabled
        </Button>
        <Button href={action('clicked')}>Link</Button>
        <Button theme="link" href={action('clicked')}>
          Link
        </Button>
      </div>
    </div>
  ))
  .add('with emoji', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </div>
  ))
  .add('Close Button', () => (
    <div className={select('theme', themes, styles.dark)}>
      <CloseButton onClick={action('clicked')} />
    </div>
  ))
  .add('Info Button', () => (
    <div className={select('theme', themes, styles.dark)}>
      <InfoButton onClick={action('clicked')} />
    </div>
  ));
