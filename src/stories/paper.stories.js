import React from 'react';
import { Paper, styled } from '../index';

const Index = { title: 'Paper' };

export default Index;

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  '& > *': {
    margin: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

export const Elevation = () => (
  <Container>
    <Paper elevation={0} />
    <Paper />
    <Paper elevation={3} />
  </Container>
);

export const Variants = () => (
  <Container>
    <Paper variant="outlined" />
    <Paper variant="outlined" square />
  </Container>
);
