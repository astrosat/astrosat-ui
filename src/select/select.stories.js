import React from 'react';

import Select from '../select/select.component';

import makeStyles from '@mui/styles/makeStyles';

import MenuItem from '../menu/menu-item.component';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0.5rem',
    width: '10rem',
  },
  select: {
    border: `1.5px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    '&:focus': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const Index = { title: 'Select' };

export default Index;

export const Options = () => (
  <Select value="">
    <MenuItem value="Option1">Option1</MenuItem>
    <MenuItem value="Option2">Option2</MenuItem>
    <MenuItem value="Option2">Option3</MenuItem>
  </Select>
);
export const NoOptions = () => (
  <Select value="">
    <MenuItem> No Option</MenuItem>
  </Select>
);
export const Disabled = () => (
  <Select value="" disabled>
    <MenuItem>NoOptions</MenuItem>
  </Select>
);
export const WithStyles = () => {
  const { root, select } = useStyles({});
  return (
    <Select
      value="Option1"
      disableUnderline
      fullWidth={false}
      classes={{ root, select }}
    >
      <MenuItem value="Option1">Option1</MenuItem>
      <MenuItem value="Option2">Option2</MenuItem>
      <MenuItem value="Option2">Option3</MenuItem>
    </Select>
  );
};
