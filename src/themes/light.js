import { createMuiTheme } from '@material-ui/core';
import { merge } from 'lodash';
import { core } from './core';
import { palette } from './palette';

/** @type {import('@material-ui/core').ThemeOptions} */
const light = {
  palette: {
    type: 'light',
    text: { primary: palette.secondary.main },
    background: { default: palette.grey[100] }
  }
};

export default createMuiTheme(merge(core, light));
