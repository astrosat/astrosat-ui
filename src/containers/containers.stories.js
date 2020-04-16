import React, { useRef } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Detail from './detail.component';
import Well from './well.component';
import Dialog from './dialog.component';
import useModal from './use-modal.hook';
import Button from '../buttons/button.component';
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
  ))
  .add('Dialog', () => {
    const { isVisible, toggle } = useModal(false);
    const ref = useRef(document.body);

    return (
      <div ref={ref}>
        <div>
          <p>This is some text</p>
          <p>This is some text</p>
          <Button theme="primary" onClick={toggle}>
            Toggle Modal
          </Button>
          <Dialog
            isVisible={isVisible}
            close={toggle}
            title="Dialog Title"
            ref={ref}
          >
            <div className={styles.btnGroup}>
              <Textfield
                name="name"
                placeholder="Name"
                onChange={action('Name Entered')}
                required
                autoFocus
              />
            </div>

            <div className={styles.btnGroup}>
              <Textfield
                name="description"
                placeholder="Description"
                onChange={action('Description Entered')}
                required
              />
            </div>

            <div className={styles.btnGroup}>
              <Select onChange={action('Text Entered')} options={domains} />
              <Select onChange={action('Text Entered')} options={regions} />
            </div>
          </Dialog>
          <p>This is some text</p>
          <p>This is some text</p>
        </div>
      </div>
    );
  });
