import React from 'react';

import { default as Link } from './link.component';

import Typography from '@material-ui/core/Typography';

export default { title: 'Link' };

export const ActualLink = () => {
  const preventDefault = event => event.preventDefault();
  return (
    <Typography color="textPrimary">
      <Link href="#" onClick={preventDefault} color="inherit">
        Actual Link
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2">
        {'variant="body2"'}
      </Link>
    </Typography>
  );
  console.log(Typography);
};
