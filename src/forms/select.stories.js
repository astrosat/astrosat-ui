import React, { useState } from 'react';
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

export const ProgramaticUpdate = () => {
  const [value, setValue] = useState();
  return (
    <>
      <button onClick={() => setValue(1)}>Set Value 1</button>
      <button onClick={() => setValue(undefined)}>Set Value Undefined</button>
      <Select
        value={value}
        onChange={e => setValue(e.target.value)}
        options={[
          { name: 'Option 1', value: 1 },
          { name: 'Option 2', value: 2 },
          { name: 'Option 3', value: 3 }
        ]}
      />
    </>
  );
};
