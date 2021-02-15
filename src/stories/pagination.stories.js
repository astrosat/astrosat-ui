import { Pagination } from '@material-ui/lab';
import * as React from 'react';

export default { title: 'Pagination' };

export const Basic = () => (
  <>
    <Pagination count={10} />
    <Pagination count={10} color="primary" />
    <Pagination count={10} color="secondary" />
    <Pagination count={10} disabled />
  </>
);

export const Outlined = () => (
  <>
    <Pagination count={10} variant="outlined" />
    <Pagination count={10} variant="outlined" color="primary" />
    <Pagination count={10} variant="outlined" color="secondary" />
    <Pagination count={10} variant="outlined" disabled />
  </>
);

export const Rounded = () => (
  <>
    <Pagination count={10} shape="rounded" color="primary" />
    <Pagination count={10} variant="outlined" shape="rounded" />
  </>
);

export const Buttons = () => (
  <>
    <Pagination count={10} showFirstButton showLastButton />
    <Pagination count={10} hidePrevButton hideNextButton />
  </>
);
