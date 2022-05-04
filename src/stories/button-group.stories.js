import * as React from 'react';

import { Button, ButtonGroup, Box } from '../index';

const Index = { title: 'ButtonGroup' };

export default Index;

export const Basic = () => (
  <Box display="flex" flexDirection="column">
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="contained primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="text" aria-label="text primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Box>
);

export const SizesAndColors = () => (
  <Box display="flex" flexDirection="column">
    <ButtonGroup
      size="small"
      color="inherit"
      aria-label="small contained inherit button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      color="secondary"
      aria-label="contained secondary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup size="large" aria-label="large contained primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Box>
);

export const Vertical = () => (
  <Box display="flex">
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical contained primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined primary button group"
      variant="outlined"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical text primary button group"
      variant="text"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Box>
);
