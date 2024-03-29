import { Box } from '@material-ui/core';
import { SearchIcon } from 'icons';
import React from 'react';
import IconButton from './icon-button.component';

const Index = { title: 'IconButton' };

export default Index;

/**
 * @param {import('@material-ui/core').IconButtonProps} props
 */
const Template = props => (
  <IconButton {...props}>
    <SearchIcon />
  </IconButton>
);

export const Color = () => (
  <Box display="flex">
    <Template color="default" />
    <Box color="hotpink">
      <Template color="inherit" />
    </Box>
    <Template color="primary" />
    <Template color="secondary" />
  </Box>
);

export const Size = () => (
  <>
    <Template size="small" />
    <Template size="medium" />
  </>
);

export const Disabled = () => <Template disabled />;
