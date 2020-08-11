import React from 'react';
import Radio from './radio.component';

export default { title: 'Forms/Radio', component: Radio };

export const NoLabel = () => (
  <>
    <Radio id="test" name="options" value="1" />
    <Radio id="test" name="options" value="2" />
  </>
);

export const Label = () => (
  <>
    <Radio id="test" name="options" value="1" label="Option 1" />
    <Radio id="test" name="options" value="2" label="Option 2" />
  </>
);

export const Checked = () => (
  <>
    <Radio id="test" name="options" value="1" checked label="Option 1" />
    <Radio id="test" name="options" value="2" label="Option 2" />
  </>
);

export const Disabled = () => <Radio label="Radio" disabled />;

export const CheckedAndDisabled = () => (
  <Radio label="Radio" checked disabled />
);
