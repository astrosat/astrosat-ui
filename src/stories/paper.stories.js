import React from 'react';
import { Paper, styled } from '../index';

export default { title: 'Paper' };

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  '& > *': {
    margin: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16)
  }
}));

export const Elevation = () => (
  <Container>
    <Paper elevation={0} />
    <Paper />
    <Paper elevation={3} />
  </Container>
);
