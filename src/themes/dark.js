import { createMuiTheme } from '@material-ui/core';
import { merge } from 'lodash';
import { core } from './core';
import { palette } from './palette';

/** @type {import('@material-ui/core').ThemeOptions} */
const dark = {
  palette: {
    type: 'dark',
    text: { primary: palette.grey[100] },
    background: { default: palette.secondary.main }
  }
};

export default createMuiTheme(merge(core, dark));
