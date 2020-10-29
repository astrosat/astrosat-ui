import React from 'react';
import { IconButton as MuiIconButton } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').IconButtonProps} props
 * @param {React.Ref<HTMLButtonElement>} ref
 */
const IconButton = (props, ref) => {
  const component = <MuiIconButton ref={ref} {...props} />;
  return props.disabled ? (
    <span style={{ cursor: 'not-allowed' }}>{component}</span>
  ) : (
    component
  );
};

export default React.forwardRef(IconButton);
