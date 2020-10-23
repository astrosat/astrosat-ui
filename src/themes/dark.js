import { createMuiTheme, fade } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import { merge } from 'lodash';
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
  background: { default: corePalette.secondary.main }
};

const palette = createPalette(merge(corePalette, darkPalette));

/** @type {import('@material-ui/core').ThemeOptions} */
const dark = {
  palette,
  overrides: {
    MuiButton: {
      text: {
        '&$disabled': {
          color: palette.grey[500]
        }
      },
      outlined: {
        '&$disabled': {
          color: palette.grey[500],
          borderColor: palette.grey[500]
        }
      },
      disabled: {}
    }
  }
};

export default createMuiTheme(merge(core, dark));
