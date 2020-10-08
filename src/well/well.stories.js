import React from 'react';

import Well from './well.component';

import ErrorIcon from '../icons/error-icon.component';

export default { title: 'Well' };

export const Outlined = () => {
  return (
    <>
      <Well severity="info" variant="outlined" icon={false} />
      <Well severity="error" variant="outlined" />
      <Well severity="success" variant="outlined" />
    </>
  );
};
export const Standard = () => {
  return (
    <>
      <Well severity="info" variant="standard" icon={false} />
      <Well severity="error" variant="standard" />
      <Well severity="success" variant="standard" />
    </>
  );
};
export const Filled = () => {
  return (
    <>
      <Well severity="info" variant="filled" icon={false} />
      <Well severity="error" variant="filled" />
      <Well severity="success" variant="filled" />
    </>
  );
};
