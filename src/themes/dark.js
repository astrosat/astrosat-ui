import { createMuiTheme, fade } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import deepmerge from 'deepmerge';

import { core } from './core';
import { palette as corePalette } from './palette';

/** @type {import('@material-ui/core/styles/createPalette').PaletteOptions} */
const darkPalette = {
  type: 'dark',
  text: {
    primary: corePalette.grey[100],
    secondary: corePalette.grey.A100,
    disabled: fade(corePalette.grey[100], 0.5)
  },
  background: { default: corePalette.secondary.main, paper: '#5d666e' },
  action: {
    active: corePalette.grey[300],
    hover: fade(corePalette.grey[300], corePalette.action.hoverOpacity),
    disabled: corePalette.grey[500]
  },
  divider: fade(corePalette.grey[100], 0.12)
};

const palette = createPalette(deepmerge(corePalette, darkPalette));

/** @type {import('@material-ui/core').ThemeOptions} */
const dark = {
  palette,
  overrides: {
    MuiButton: {
      outlined: {
        '&$disabled': {
          borderColor: palette.action.disabled
        }
      },
      disabled: {}
    },
    MuiChip: {
      root: {
        backgroundColor: palette.action.active,
        color: palette.secondary.main
      },
      outlined: { color: 'unset' },
      clickable: {
        '&:hover': {
          backgroundColor: palette.grey[400]
        }
      },
      avatar: {
        backgroundColor: palette.secondary.main
      },
      icon: {
        color: 'inherit'
      },
      deleteIcon: {
        color: 'inherit',
        '&:hover': {
          color: palette.secondary.light
        }
      }
    },
    MuiIconButton: {
      root: {
        '&:focus': {
          backgroundColor: palette.action.hover
        },
        '&$disabled': {
          color: palette.action.disabled
        }
      },
      disabled: {}
    },
    MuiInputLabel: {
      root: {
        '&$error': {
          color: palette.text.primary
        }
      }
    },
    MuiFormLabel: {
      root: {
        color: palette.text.primary
      }
    },
    MuiDialogContentText: {
      root: { color: palette.text.primary }
    }
  }
};

export default createMuiTheme(deepmerge(core, dark));
