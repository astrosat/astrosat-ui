import React from 'react';
import TextField from './text-field.component';

export default { title: 'TextField' };

const Template = args => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic Field'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Helper Text',
  helperText: 'This is helper text'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: true,
  helperText: "Something's wrong"
};

export const Valid = Template.bind({});
Valid.args = {
  label: 'Valid',
  valid: true,
  helperText: 'nothing is wrong'
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  label: 'Multiline',
  helperText: 'This is a textarea'
};
