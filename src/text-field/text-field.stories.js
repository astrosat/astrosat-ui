import { MenuItem } from 'index';
import React from 'react';
import TextField from './text-field.component';

const Index = { title: 'TextField' };

export default Index;

const Template = args => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic Field',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: true,
  helperText: "Something's wrong",
};

export const Valid = Template.bind({});
Valid.args = {
  label: 'Valid',
  valid: true,
  helperText: 'nothing is wrong',
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  label: 'Multiline',
  helperText: 'This is a textarea',
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Password',
  type: 'password',
};

export const Select = Template.bind({});
Select.args = {
  value: '',
  select: true,
  label: 'This is a select',
  children: [
    <MenuItem>Option 1</MenuItem>,
    <MenuItem>Option 2</MenuItem>,
    <MenuItem>Option 3</MenuItem>,
  ],
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 50,
  label: 'Max Length',
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Helper Text',
  helperText: 'This is helper text',
};

export const MaxLengthText = Template.bind({});
MaxLengthText.args = {
  maxLength: 50,
  label: 'Max Length Text',
  maxLengthTemplate: 'User typed $charCount/$maxLength of max characters',
};

export const MaxLengthAndHelperText = Template.bind({});
MaxLengthAndHelperText.args = {
  maxLength: 50,
  label: 'Max Length Text',
  helperText: 'Test is a helper text.',
};

export const MaxLengthTextAndHelperText = Template.bind({});
MaxLengthTextAndHelperText.args = {
  maxLength: 40,
  label: 'Max Length Text And HelperText',
  maxLengthTemplate: 'User typed $charCount/$maxLength of max characters',
  helperText: 'Test is a helper text.',
};
