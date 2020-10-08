import React from 'react';

import Well from './well.component';

import ErrorIcon from '../icons/error-icon.component';

import SuccessIcon from '../icons/correct-icon.component';

export default { title: 'Well' };

export const Outlined = () => {
  return (
    <>
      <Well severity="info" variant="outlined" icon={false} />
      <Well severity="error" variant="outlined" icon={<ErrorIcon />} />
      <Well severity="success" variant="outlined" icon={<SuccessIcon />} />
    </>
  );
};

export const Standard = () => {
  return (
    <>
      <Well severity="info" variant="standard" icon={false} />
      <Well severity="error" variant="standard" icon={<ErrorIcon />} />
      <Well severity="success" variant="standard" icon={<SuccessIcon />} />
    </>
  );
};

export const Filled = () => {
  return (
    <>
      <Well severity="info" variant="filled" icon={false} />
      <Well severity="error" variant="filled" icon={<ErrorIcon />} />
      <Well severity="success" variant="filled" icon={<SuccessIcon />} />
    </>
  );
};
