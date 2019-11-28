import React, { Suspense } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import Textfield from './text-field.component';
import PasswordField from './password-field.component';
import TextArea from './text-area.component';
import Checkbox from './checkbox.component';
import Radio from './radio.component';
import LoadMask from '../load-mask/load-mask.component';

import styles from '../index.module.css';

const PasswordStrengthMeter = React.lazy(() =>
  import('./password-strength-meter.component')
);

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('Elements', () => (
    <div className={select('theme', themes, styles.dark)}>
      <div className={styles.btnGroup}>
        <TextArea
          rows="10"
          placeholder="Text area content..."
          onChange={action('Text Entered')}
        />
      </div>

      <div className={styles.btnGroup}>
        <Textfield onChange={action('Text Entered')} placeholder="Default" />
      </div>

      <div className={styles.btnGroup}>
        <Textfield
          onChange={action('Text Entered')}
          placeholder="Disabled"
          disabled={true}
        />
      </div>

      <div className={styles.btnGroup}>
        <Textfield
          onChange={action('Text Entered')}
          placeholder="Valid"
          valid={true}
        />
      </div>

      <div className={styles.btnGroup}>
        <Textfield
          onChange={action('Text Entered')}
          placeholder="Invalid"
          valid={false}
        />
      </div>

      <div className={styles.btnGroup}>
        <PasswordField placeholder="Password" />
      </div>
      <Suspense fallback={<LoadMask />}>
        <div className={styles.btnGroup}>
          <p>
            <strong>Password:</strong> Cfwtca
          </p>
          <PasswordStrengthMeter
            password="Cfwtca"
            onChange={action('Text Entered')}
          />

          <p>
            <strong>Password:</strong> In+ut0dR
          </p>
          <PasswordStrengthMeter password="In+ut0dR" />

          <p>
            <strong>Password:</strong> wordsownt3
          </p>
          <PasswordStrengthMeter password="wordsownt3+B" />

          <p>
            <strong>Password:</strong> wordsowncateract
          </p>
          <PasswordStrengthMeter password="wordsowncateract" />
        </div>
      </Suspense>

      <div className={styles.btnGroup}>
        <Checkbox
          name="test"
          value="option1"
          label="Checkbox One"
          onChange={action('Checkbox toggled')}
        />
        <Checkbox
          name="test"
          value="option2"
          label="Checkbox Two"
          onChange={action('Checkbox toggled')}
        />
        <Checkbox
          name="test"
          value="option3"
          label="Checkbox Three"
          disabled={true}
          onChange={action('Checkbox toggled')}
        />
      </div>

      <div className={styles.btnGroup}>
        <Radio
          name="test"
          value="option1"
          label="Radio One"
          onChange={action('Radio selected')}
        />
        <Radio
          name="test"
          value="option2"
          label="Radio Two"
          onChange={action('Radio selected')}
        />
        <Radio
          name="test"
          value="option3"
          label="Radio Three"
          onChange={action('Radio selected')}
          disabled={true}
        />
      </div>
    </div>
  ));
