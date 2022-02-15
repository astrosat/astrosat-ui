import * as React from 'react';

import { Button, ButtonGroup, Box } from '../index';

export default { title: 'ButtonGroup' };

export const Basic = () => (
  <Box display="flex" flexDirection="column">
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    {/* <ButtonGroup
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
    </ButtonGroup> */}
  </Box>
);

// export const SizesAndColors = () => (
//   <Box display="flex" flexDirection="column">
//     <ButtonGroup
//       color="default"
//       size="small"
//       aria-label="small outlined button group"
//     >
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//     <ButtonGroup color="secondary" aria-label="outlined secondary button group">
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//     <ButtonGroup
//       size="large"
//       color="primary"
//       aria-label="large outlined primary button group"
//     >
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//   </Box>
// );

// export const Vertical = () => (
//   <Box display="flex">
//     <ButtonGroup
//       orientation="vertical"
//       color="primary"
//       aria-label="vertical outlined primary button group"
//     >
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//     <ButtonGroup
//       orientation="vertical"
//       color="primary"
//       aria-label="vertical contained primary button group"
//       variant="outlined"
//     >
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//     <ButtonGroup
//       orientation="vertical"
//       color="primary"
//       aria-label="vertical contained primary button group"
//       variant="text"
//     >
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//   </Box>
// );
