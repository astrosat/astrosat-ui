import React from 'react';

import { Link as MuiLink } from '@mui/material';

/**
 * @param {import('@mui/material').LinkProps} props
 * @param {React.Ref<any>} ref
 */
const Link = (props, ref) => {
  return <MuiLink ref={ref} {...props} />;
};
export default React.forwardRef(Link);
