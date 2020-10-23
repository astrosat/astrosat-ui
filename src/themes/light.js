import { createMuiTheme, fade } from '@material-ui/core';
import { merge } from 'lodash';
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
  }
};

export default createMuiTheme(merge(core, light));
