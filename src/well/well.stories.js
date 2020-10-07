import React from 'react';

import { Snackbar } from '@material-ui/core';

import Alert from './well.component';

export default { title: 'Snackbar' };

export const Info = () => {
  return (
    <div>
      <Snackbar autoHideDuration={6000}>
        <Alert severity="info" />
      </Snackbar>
      <Alert severity="info" variant="filled" />
      <Alert severity="info" variant="outlined" />
    </div>
  );
};
export const Error = () => {
  return (
    <div>
      <Snackbar autoHideDuration={6000}>
        <Alert severity="error" />
      </Snackbar>
      <Alert severity="error" variant="filled" />
      <Alert severity="error" variant="outlined" />
    </div>
  );
};
export const Success = () => {
  return (
    <div>
      <Snackbar autoHideDuration={6000}>
        <Alert severity="success" />
      </Snackbar>
      <Alert severity="success" variant="filled" />
      <Alert severity="success" variant="outlined" />
    </div>
  );
};
