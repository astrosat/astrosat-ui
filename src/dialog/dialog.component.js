import React, { forwardRef } from 'react';

import { Dialog as MuiDialog } from '@material-ui/core';

const Dialog = ({ children, open = false, ...props }, ref) => {
  return (
    <MuiDialog open={open} {...props} ref={ref}>
      {children}
    </MuiDialog>
  );
};

export default React.forwardRef(Dialog);
