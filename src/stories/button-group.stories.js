import * as React from 'react';

import { Button, ButtonGroup, Box } from '../index';

const Index = { title: 'ButtonGroup' };

export default Index;

export const Basic = () => (
  <Box display="flex" flexDirection="column">
    <ButtonGroup
      variant="outlined"
      color="primary"
      aria-label="outlined primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Box>
);

export const SizesAndColors = () => (
  <Box display="flex" flexDirection="column">
    <ButtonGroup
      variant="contained"
      size="small"
      color="inherit"
      aria-label="small contained button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      variant="contained"
      color="secondary"
      aria-label="outlined secondary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      variant="contained"
      size="large"
      color="primary"
      aria-label="large contained primary button group"
    >
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
      color="primary"
      variant="contained"
      aria-label="vertical outlined primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      color="primary"
      variant="outlined"
      aria-label="vertical contained primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      color="primary"
      variant="text"
      aria-label="vertical contained primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Box>
);
