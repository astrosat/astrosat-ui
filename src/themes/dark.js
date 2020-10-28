import { createMuiTheme, fade } from '@material-ui/core';
import { core } from './core';
import deepmerge from 'deepmerge';
import { palette as corePalette } from './palette';
import createPalette from '@material-ui/core/styles/createPalette';

/** @type {import('@material-ui/core/styles/createPalette').PaletteOptions} */
const darkPalette = {
  type: 'dark',
  text: { primary: corePalette.grey[100] },
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
    }
  }
};

export default createMuiTheme(deepmerge(core, dark));
