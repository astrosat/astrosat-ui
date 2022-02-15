import React from 'react';

import { styled } from '@mui/material/styles';

import { Button as MuiButton } from '@mui/material';
const PREFIX = 'Button';

const classes = {
  root: `${PREFIX}-root`,
  disabled: `${PREFIX}-disabled`,
  contained: `${PREFIX}-contained`,
  containedPrimary: `${PREFIX}-containedPrimary`,
  textSizeSmall: `${PREFIX}-textSizeSmall`,
  textSizeLarge: `${PREFIX}-textSizeLarge`,
  outlinedSizeSmall: `${PREFIX}-outlinedSizeSmall`,
  outlinedSizeLarge: `${PREFIX}-outlinedSizeLarge`,
  containedSizeSmall: `${PREFIX}-containedSizeSmall`,
  containedSizeLarge: `${PREFIX}-containedSizeLarge`,
};

const Root = styled('span')(({ theme }) => ({
  [`& .${classes.root}`]: {
    padding: '0.65em 4em',
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short,
      }
    ),
  },

  [`&.${classes.disabled}`]: {
    cursor: 'not-allowed',
    PointerEvent: 'auto',
  },

  [`&.${classes.contained}`]: {
    color: theme.palette.secondary.main,
    '&:hover': {
      opacity: 0.5,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700,
    },
  },

  [`&.${classes.containedPrimary}`]: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  [`&.${classes.textSizeSmall}`]: {
    fontSize: theme.typography.pxToRem(14),
  },

  [`&.${classes.textSizeLarge}`]: {
    fontSize: theme.typography.pxToRem(22),
  },

  [`&.${classes.outlinedSizeSmall}`]: {
    fontSize: theme.typography.pxToRem(14),
  },

  [`&.${classes.outlinedSizeLarge}`]: {
    fontSize: theme.typography.pxToRem(22),
  },

  [`&.${classes.containedSizeSmall}`]: {
    fontSize: theme.typography.pxToRem(14),
  },

  [`&.${classes.containedSizeLarge}`]: {
    fontSize: theme.typography.pxToRem(22),
  },
}));

// const styles = makeStyles((
//   {
//     theme
//   }
// ) => ({
//   [`& .${classes.root}`]: {
//     padding: '0.65em 4em',
//     transition: theme.transitions.create(
//       ['background-color', 'box-shadow', 'border', 'opacity'],
//       {
//         duration: theme.transitions.duration.short,
//       }
//     ),
//   },

//   [`& .${classes.disabled}`]: {},

//   [`& .${classes.contained}`]: {
//     color: theme.palette.secondary.main,
//     '&:hover': {
//       opacity: 0.5,
//     },
//     '&$disabled': {
//       backgroundColor: theme.palette.grey['300'],
//       color: theme.palette.grey.A700,
//     },
//   },

//   [`& .${classes.containedPrimary}`]: {
//     '&:hover': {
//       backgroundColor: theme.palette.primary.main,
//     },
//   },

//   [`& .${classes.textSizeSmall}`]: {
//     fontSize: theme.typography.pxToRem(14),
//   },

//   [`& .${classes.textSizeLarge}`]: {
//     fontSize: theme.typography.pxToRem(22),
//   },

//   [`& .${classes.outlinedSizeSmall}`]: {
//     fontSize: theme.typography.pxToRem(14),
//   },

//   [`& .${classes.outlinedSizeLarge}`]: {
//     fontSize: theme.typography.pxToRem(22),
//   },

//   [`& .${classes.containedSizeSmall}`]: {
//     fontSize: theme.typography.pxToRem(14),
//   },

//   [`& .${classes.containedSizeLarge}`]: {
//     fontSize: theme.typography.pxToRem(22),
//   }
// }));

/**
 * @param { import('@mui/material/Button/Button').ButtonProps} props
 * @param { React.Ref<HTMLButtonElement> } ref
 */
const Button = ({ variant = 'contained', color = 'primary', ...rest }, ref) => {
  // const classes = styles({ variant, color, ...rest });

  const component = (
    <MuiButton
      ref={ref}
      classes={classes}
      // classes={`${classes.root} ${classes.contained} ${classes.containedPrimary} ${classes.containedSizeLarge} ${classes.containedSizeSmall} ${classes.disabled} ${classes.outlinedSizeLarge} ${classes.outlinedSizeSmall} ${classes.textSizeLarge} ${classes.textSizeSmall}`}
      variant={variant}
      color={color}
      {...rest}
    />
  );
  console.log('REST DISABLED: ', rest.disabled);
  return rest.disabled ? (
    <Root sx={{ cursor: 'not-allowed' }}>{component}</Root>
  ) : (
    component
  );
};

export default React.forwardRef(Button);
