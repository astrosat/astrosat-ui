import { createMuiTheme, fade } from '@material-ui/core';
import deepmerge from 'deepmerge';
import { core } from './core';
import { palette } from './palette';

/** @type {import('@material-ui/core').ThemeOptions} */
const light = {
  palette: {
    type: 'light',
    text: {
      primary: palette.secondary.main,
      secondary: palette.secondary.main,
      disabled: fade(palette.secondary.main, 0.5)
    },
    background: { default: palette.grey[100] }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: palette.secondary.main
      },
      shrink: {
        color: palette.secondary.main
      }
    },
    MuiIconButton: {
      root: {
        color: palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(
            palette.secondary.main,
            palette.action.hoverOpacity
          )
        }
      }
    }
  }
};

export default createMuiTheme(deepmerge(core, light));
