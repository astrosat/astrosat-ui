import React, { useRef } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Detail from './detail.component';
import Well from './well.component';
import useModal from './use-modal.hook';
import Button from '../button/button.component';
import Textfield from '../forms/text-field.component';
import Select from '../forms/select.component';

import styles from '../story-styles.module.css';

const domains = [
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

const regions = [
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

storiesOf('Containers', module)
  .add('Detail', () => (
    <>
      <Detail title="Section Title 1">
        <div className={styles.detail}>
          This is some content for the detail element:
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
          <p>some footer content</p>
        </div>
      </Detail>

      <Detail title="Section Title 1" isOpen={true}>
        <div className={styles.detail}>
          This is some content for the detail element:
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
          <p>some footer content</p>
        </div>
      </Detail>
    </>
  ))
  .add('Well', () => (
    <>
      <div className={styles.btnGroup}>
        <Well>
          <div>
            This is some content for the detail element:
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
            <p>some footer content</p>
          </div>
        </Well>
      </div>

      <div className={styles.btnGroup}>
        <Well type="error">
          <div>
            This is some content for the detail element:
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
            <p>some footer content</p>
          </div>
        </Well>
      </div>

      <div className={styles.btnGroup}>
        <Well type="success">
          <div>
            This is some content for the detail element:
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
            <p>some footer content</p>
          </div>
        </Well>
      </div>
    </>
  ));
