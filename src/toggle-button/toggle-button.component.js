import React from 'react';
import clsx from 'clsx';
import { darken, ToggleButton as MuiToggleButton } from '@mui/material';
import { styled } from '@mui/system';

import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexBasis: '100%',
//     border: 'none',
//     padding: '0.65em',
//     color: theme.palette.common.white,
//     backgroundColor: darken(theme.palette.secondary.main, 0.3),
//     transition: theme.transitions.create(
//       ['background-color', 'box-shadow', 'border', 'opacity'],
//       {
//         duration: theme.transitions.duration.short,
//       }
//     ),
//     '&:hover': {
//       backgroundColor: darken(theme.palette.secondary.main, 0.3),
//       opacity: 0.5,
//     },
//     '&$disabled': {
//       backgroundColor: theme.palette.grey['300'],
//       color: theme.palette.grey.A700,
//     },
//     '&$selected': {
//       color: theme.palette.secondary.main,
//       backgroundColor: theme.palette.primary.main,
//       '&:hover': {
//         backgroundColor: theme.palette.primary.main,
//         opacity: 0.5,
//       },
//     },
//     '&$sizeSmall': {
//       padding: '0.57em',
//       fontSize: theme.typography.pxToRem(14),
//     },
//     '&$sizeLarge': {
//       padding: '0.73em',
//       fontSize: theme.typography.pxToRem(22),
//     },
//   },
//   selected: {},
//   disabled: {},
//   sizeSmall: {},
//   sizeLarge: {},
// }));

const StyledToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  '&': {
    flexBasis: '100%',
    border: 'none',
    padding: '0.65em',
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.3),
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.3),
      opacity: 0.5,
    },
    '&$disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700,
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5,
      },
    },
    '&$sizeSmall': {
      padding: '0.57em',
      fontSize: theme.typography.pxToRem(14),
    },
    '&$sizeLarge': {
      padding: '0.73em',
      fontSize: theme.typography.pxToRem(22),
    },
  },
}));

/**
 * @param {import('@mui/lab').ToggleButtonProps} props
 */
const ToggleButton = ({ classes = {}, ...props }) => {
  // const styles = useStyles({});
  const { root, selected, disabled, sizeSmall, sizeLarge, ...rest } = classes;

  // const combinedStyles = {
  //   root: clsx(styles.root, root),
  //   selected: clsx(styles.selected, selected),
  //   disabled: clsx(styles.disabled, disabled),
  //   sizeSmall: clsx(styles.sizeSmall, sizeSmall),
  //   sizeLarge: clsx(styles.sizeLarge, sizeLarge),
  //   ...rest,
  // };
  const combinedStyles = {
    root: root,
    selected: selected,
    disabled: disabled,
    sizeSmall: sizeSmall,
    sizeLarge: sizeLarge,
    ...rest,
  };
  return (
    <StyledToggleButton
      disableRipple
      disableFocusRipple
      classes={combinedStyles}
      {...props}
    />
  );
};

export default ToggleButton;
