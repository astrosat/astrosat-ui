import React from 'react';

import { default as Link } from './link.component';

import Typography from '@mui/material/Typography';

const Index = { title: 'Link' };

export default Index;

export const ActualLink = () => {
  const preventDefault = event => event.preventDefault();
  return (
    <Typography color="textPrimary" variant="body2">
      <Link href="#" onClick={preventDefault} color="inherit">
        Actual Link
      </Link>
      <Link href="#" onClick={preventDefault} color="error">
        {'color="error"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2">
        {'variant="body2"'}
      </Link>
    </Typography>
  );
};
