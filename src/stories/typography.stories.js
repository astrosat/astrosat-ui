import { Box } from '@material-ui/core';
import { Typography } from '..';
import * as React from 'react';

export default { title: 'Typography' };

export const Types = () => (
  <Box display="flex" flexDirection="column">
    <Typography variant="h1">H1</Typography>
    <Typography variant="h2">H2</Typography>
    <Typography variant="h3">H3</Typography>
    <Typography variant="h4">H4</Typography>
    <Typography variant="h5">H5</Typography>
    <Typography variant="h6">H6</Typography>
    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="subtitle2">subtitle2</Typography>
    <Typography variant="body1">body1</Typography>
    <Typography variant="body2">body2</Typography>
    <Typography variant="button">button</Typography>
    <Typography variant="caption">caption</Typography>
    <Typography variant="overline">overline</Typography>
  </Box>
);
