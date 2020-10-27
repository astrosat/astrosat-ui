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
    secondary: corePalette.grey[100],
    disabled: fade(corePalette.grey[100], 0.5)
  },
  background: { default: corePalette.secondary.main },
  action: {
    active: corePalette.grey[300],
    hover: fade(corePalette.grey[300], corePalette.action.hoverOpacity),
    disabled: corePalette.grey[500]
  }
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
        color: palette.secondary.main
      },
      shrink: {
        color: palette.text.secondary
      }
    }
  }
};

export default createMuiTheme(deepmerge(core, dark));
