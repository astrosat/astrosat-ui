import { Button as MuiButton } from '@mui/material';
import React from 'react';

/**
 * @param { import('@mui/material/Button/Button').ButtonProps} props
 * @param { React.Ref<HTMLButtonElement> } ref
 */
const AstrosatButton = React.forwardRef(
  ({ variant = 'contained', color = 'primary', ...rest }, ref) => (
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
      variant={variant}
      color={color}
      {...rest}
      ref={ref}
    />
  )
);

const Button = ({ ...rest }, ref) =>
  rest.disabled ? (
    <span style={{ cursor: 'not-allowed' }}>
      <AstrosatButton {...rest} ref={ref} />
    </span>
  ) : (
    <AstrosatButton {...rest} ref={ref} />
  );

export default React.forwardRef(Button);
