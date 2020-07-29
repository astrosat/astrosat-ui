import React from 'react';
import Select from './select.component';

export default { title: 'Forms/Select' };

export const NoOptions = () => <Select />;

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

export const Options = () => <Select options={options} />;

export const Disabled = () => <Select disabled />;
