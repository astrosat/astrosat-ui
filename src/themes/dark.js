import { createTheme, alpha, lighten } from '@mui/material/styles';
import deepmerge from 'deepmerge';

import { core } from './core';
import { palette as corePalette } from './palette';

// console.log('DARK CORE PALETTE: ', corePalette);
/** @type {import('@mui/material/styles/createPalette').PaletteOptions} */
const darkPalette = {
  mode: 'dark',
  text: {
    primary: corePalette.palette.grey[100],
    secondary: corePalette.palette.grey.A100,
    disabled: alpha(corePalette.palette.grey[100], 0.5),
  },
  background: { default: corePalette.palette.secondary.main, paper: '#5d666e' },
  action: {
    active: corePalette.palette.grey[300],
    hover: alpha(
      corePalette.palette.grey[300],
      corePalette.palette.action.hoverOpacity
    ),
    disabled: corePalette.palette.grey[500],
  },
  divider: alpha(corePalette.palette.grey[100], 0.12),
};

const palette = deepmerge(corePalette, darkPalette);

/** @type {import('@mui/material').ThemeOptions} */
const dark = {
  ...palette,
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          '&$disabled': {
            borderColor: corePalette.palette.action.disabled,
          },
        },
        disabled: {},
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: corePalette.palette.action.active,
          color: corePalette.palette.secondary.main,
        },
        outlined: { color: 'unset' },
        clickable: {
          '&:hover': {
            backgroundColor: corePalette.palette.grey[400],
          },
        },
        avatar: {
          backgroundColor: corePalette.palette.secondary.main,
        },
        icon: {
          color: 'inherit',
        },
        deleteIcon: {
          color: 'inherit',
          '&:hover': {
            color: corePalette.palette.secondary.light,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: corePalette.palette.background.default,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            backgroundColor: corePalette.palette.action.hover,
          },
          '&$disabled': {
            color: corePalette.palette.action.disabled,
          },
        },
        disabled: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&$error': {
            color: corePalette.palette.text.primary,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: corePalette.palette.text.primary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: lighten(
              corePalette.palette.background.default,
              0.1
            ),
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          borderBottomColor: corePalette.palette.divider,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&$textColorPrimary': {
            color: corePalette.palette.text.primary,
          },
        },
        textColorPrimary: {},
      },
    },
  },
};
console.log('DARK PALETTE: ', dark);

export default createTheme(deepmerge(core, dark));
