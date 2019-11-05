import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import Textfield from './text-field.component';
import PasswordField from './password-field.component';
import PasswordStrengthMeter from './password-strength-meter.component';
import TextArea from './text-area.component';
import Checkbox from './checkbox.component';
import Radio from './radio.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Form Elements', module)
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
      <Textfield
        onChange={action('Text Entered')}
        placeholder="Text Field"
        valid={true}
      />
    </div>
  ))
  .add('Invalid', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Textfield onChange={action('Text Entered')} placeholder="Text Field" />
    </div>
  ))
  .add('Password', () => (
    <div className={select('theme', themes, styles.dark)}>
      <PasswordField />
    </div>
  ))
  .add('Password Strength Weak', () => (
    <div className={select('theme', themes, styles.dark)}>
      <p>
        <strong>Password:</strong> Cfwtca
      </p>
      <PasswordStrengthMeter
        password="Cfwtca"
        onChange={action('Text Entered')}
      />
    </div>
  ))
  .add('Password Strength Fair', () => (
    <div className={select('theme', themes, styles.dark)}>
      <p>
        <strong>Password:</strong> In+ut0dR
      </p>
      <PasswordStrengthMeter password="In+ut0dR" />
    </div>
  ))
  .add('Password Strength Good', () => (
    <div className={select('theme', themes, styles.dark)}>
      <p>
        <strong>Password:</strong> wordsownt3
      </p>
      <PasswordStrengthMeter password="wordsownt3+B" />
    </div>
  ))
  .add('Password Strength Strong', () => (
    <div className={select('theme', themes, styles.dark)}>
      <p>
        <strong>Password:</strong> wordsowncateract
      </p>
      <PasswordStrengthMeter password="wordsowncateract" />
    </div>
  ))
  .add('Text Area', () => (
    <div className={select('theme', themes, styles.dark)}>
      <TextArea
        rows="10"
        placeholder="Text area content..."
        onChange={action('Text Entered')}
      />
    </div>
  ))
  .add('Checkboxes', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Checkbox onChange={action('Checkbox toggled')} />
      <Checkbox checked={true} onChange={action('Checkbox toggled')} />
      <Checkbox
        checked={true}
        disabled={true}
        onChange={action('Checkbox toggled')}
      />
    </div>
  ))
  .add('Radios', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Radio
        name="test"
        value="option1"
        label="Option One"
        onChange={action('Radio selected')}
      />
      <Radio
        name="test"
        value="option2"
        label="Option Two"
        onChange={action('Radio selected')}
      />
      <Radio
        name="test"
        value="option3"
        label="Option Three"
        onChange={action('Radio selected')}
        disabled={true}
      />
    </div>
  ));
