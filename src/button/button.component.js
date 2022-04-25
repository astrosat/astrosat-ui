import { Button as MuiButton } from '@mui/material';
import React from 'react';

/**
 * @param { import('@mui/material/Button/Button').ButtonProps} props
 * @param { React.Ref<HTMLButtonElement> } ref
 */
const Button = ({ variant = 'contained', color = 'primary', ...rest }, ref) => {
  const component = (
    <MuiButton
      sx={{
        '&': {
          padding: '0.65em 4em',
          transition: theme =>
            theme.transitions.create(
              ['background-color', 'box-shadow', 'border', 'opacity'],
              {
                duration: theme.transitions.duration.short,
              }
            ),
        },
        disabled: {},
        contained: {
          color: theme => theme.palette.secondary.main,
          '&:hover': {
            opacity: 0.5,
          },
          '&$disabled': {
            backgroundColor: theme => theme.palette.grey['300'],
            color: theme => theme.palette.grey.A700,
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: theme => theme.palette.primary.main,
          },
        },
      }}
      ref={ref}
      variant={variant}
      color={color}
      {...rest}
    />
  );
  return rest.disabled ? (
    <span style={{ cursor: 'not-allowed' }}>{component}</span>
  ) : (
    component
  );
};

export default React.forwardRef(Button);
