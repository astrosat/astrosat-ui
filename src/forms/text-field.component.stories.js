import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import Textfield from './text-field.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Text Fields', module)
  .addDecorator(withKnobs)
  .add('Normal', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Textfield onChange={action('Text Entered')} placeholder="Text Field" />
    </div>
  ))
  .add('Disabled', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Textfield
        onChange={action('Text Entered')}
        placeholder="Text Field"
        disabled={true}
      />
    </div>
  ))
  .add('Valid', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Textfield onChange={action('Text Entered')} placeholder="Text Field" validate={true} />
    </div>
  ))
  .add('Invalid', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Textfield onChange={action('Text Entered')} placeholder="Text Field" validate={true} />
    </div>
  ))
  .add('Password', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Textfield onChange={action('Text Entered')} placeholder="Text Field" />
    </div>
  ));
