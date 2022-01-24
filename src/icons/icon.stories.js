import React from 'react';
import { Box } from '@mui/material';

import * as Icons from '.';

export default { title: 'Icons' };

export const All = () => (
  <Box display="flex" width="100%" flexWrap="wrap">
    {Object.values(Icons).map((Icon, i) => (
      <Box
        key={`icon-${i}`}
        m={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Icon style={{ marginBottom: '0.5rem' }} />
        <p>{Icon.name}</p>
      </Box>
    ))}
  </Box>
);

export const Color = () => (
  <Box display="flex">
    <Icons.CorrectIcon color="action" />
    <Icons.ErrorIcon color="error" />
    <Icons.CogIcon color="primary" />
    <Icons.CogIcon color="secondary" />
    <Icons.CogIcon color="disabled" />
    <Box style={{ color: 'hotpink' }}>
      <Icons.CogIcon color="inherit" />
    </Box>
    <Icons.CogIcon htmlColor="coral" />
  </Box>
);

export const Size = () => (
  <Box display="flex">
    <Icons.CogIcon fontSize="small" />
    <Icons.CogIcon />
    <Icons.CogIcon fontSize="large" />
    <Icons.CogIcon style={{ fontSize: 40 }} />
  </Box>
);
