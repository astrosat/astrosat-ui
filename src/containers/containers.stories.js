import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Detail from './detail.component';
import Well from './well.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .add('Detail', () => (
    <div className={select('theme', themes, styles.dark)}>
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
    </div>
  ))
  .add('Well', () => (
    <div className={select('theme', themes, styles.dark)}>
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
    </div>
  ));
