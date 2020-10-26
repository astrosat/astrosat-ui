import { createMuiTheme, fade } from '@material-ui/core';
import deepmerge from 'deepmerge';
import { core } from './core';
import { palette } from './palette';

/** @type {import('@material-ui/core').ThemeOptions} */
const light = {
  palette: {
    type: 'light',
    text: { primary: palette.secondary.main },
    background: { default: palette.grey[100] }
  },
  overrides: {
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
