import React, { Suspense } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RadioGroup from '../radio-group/radio-group.component';

import Textfield from './text-field.component';
import PasswordField from './password-field.component';
import TextArea from './text-area.component';
import Radio from '../radio/radio.component';
import Slider from './slider.component';
import Select from './select.component';
import useForm from './use-form.hook';
import Button from '../button/button.component';

import LoadMask from '../load-mask/load-mask.component';

import { scaleUtc, scalePow } from 'd3-scale';

import styles from '../story-styles.module.css';

const PasswordStrengthMeter = React.lazy(() =>
  import('./password-strength-meter.component')
);

const options = [
  { name: 'Option 1', value: { id: '1', title: 'Mr' } },
  {
    name: 'Option 2',
    value: [
      { id: '1', title: 'Mr' },
      { id: '2', title: 'Mrs' }
    ]
  },
  { name: 'Option 3', value: 'Mr' }
];

const Form = () => {
  const defaults = {
    values: {
      free: true
    }
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    onSubmit,
    validate,
    defaults
  );

  function validate() {
    return {};
  }
  module;
  function onSubmit() {
    console.log('Submitting: ', values);
  }

  return (
    <div className={`${styles.container} ${styles.accountsBackground}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.btnGroup}>
          <Textfield
            name="email"
            value={values.email || ''}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className={styles.btnGroup}>
          <RadioGroup>
            <Radio
              id="Radio 1"
              name="Radio 1"
              label="Radio 1"
              value="Option 1"
              onChange={handleChange}
            />
            <Radio
              id="Radio 2"
              name="Radio 2"
              label="Radio 2"
              value="Option 2"
              onChange={handleChange}
            />
            <Radio
              id="Radio 3"
              name="Radio 3"
              label="Radio 3"
              value="Option 3"
              onChange={handleChange}
            />
          </RadioGroup>
        </div>

        <div className={styles.btnGroup}>
          <Select name="title" onChange={handleChange} options={options} />
        </div>

        <div className={styles.btnGroup}>
          <TextArea
            name="description"
            rows="10"
            placeholder="Text area content..."
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttons}>
          <Button type="submit" theme="primary" className={styles.button}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

storiesOf('Form', module)
  .add('Elements', () => (
    <>
      <div className={styles.btnGroup}>
        <TextArea
          rows="10"
          placeholder="Text area content..."
          onChange={action('Text Entered')}
        />
      </div>

      <div className={styles.btnGroup}>
        <Select onChange={action('Option Selected')} options={options} />
        <Select
          onChange={action('Option Selected')}
          options={options}
          disabled={true}
        />
      </div>

      <div className={styles.btnGroup}>
        <PasswordField placeholder="Password" />
      </div>
      <Suspense fallback={<LoadMask />}>
        <div className={styles.meterSGroup}>
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
        <RadioGroup>
          <Radio
            id="Radio 1"
            name="Radio 1"
            label="Radio 1"
            value="Option 1"
            onChange={handleChange}
          />
          <Radio
            id="Radio 2"
            name="Radio 2"
            label="Radio 2"
            value="Option 2"
            onChange={handleChange}
          />
          <Radio
            id="Radio 3"
            name="Radio 3"
            label="Radio 3"
            value="Option 3"
            onChange={handleChange}
          />
        </RadioGroup>
      </div>
    </>
  ))
  .add('Slider', () => (
    <>
      <h3>Simple range</h3>
      <Slider
        min={0}
        max={10}
        values={[1, 7]}
        onChange={action('Slider changed')}
      />
      <h3>Date range</h3>
      <Slider
        scale={scaleUtc().domain([
          new Date('2018-01-01'),
          new Date('2019-01-01')
        ])}
        values={[
          new Date('2018-03-01T00:00:00Z'),
          new Date('2018-08-01T00:00:00Z')
        ]}
        onChange={action('Date Slider changed')}
      />
      <h3>Slider power</h3>
      <Slider
        scale={scalePow()
          .exponent(0.5)
          .domain([0, 10000])}
        values={[500]}
        onChange={action('Logarithmic Slider changed')}
      />
    </>
  ))
  .add('Form', () => <Form />);
