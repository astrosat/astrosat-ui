import { createTheme, alpha } from '@mui/material/styles';
import deepmerge from 'deepmerge';
import { core } from './core';
import { palette } from './palette';

// console.log('LIGHT CORE PALETTE: ', palette);
/** @type {import('@mui/material').ThemeOptions} */
const light = {
  palette: {
    mode: 'light',
    text: {
      primary: palette.palette.secondary.main,
      secondary: palette.palette.secondary.main,
      disabled: alpha(palette.palette.secondary.main, 0.5),
    },
    background: { default: palette.palette.grey[100] },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.palette.secondary.main,
        },
        shrink: {
          color: palette.palette.secondary.main,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: palette.palette.secondary.main,
          '&:hover': {
            backgroundColor: alpha(
              palette.palette.secondary.main,
              palette.palette.action.hoverOpacity
            ),
          },
        },
      },
    },
  },
};
console.log('LIGHT PALETTE: ', light);

export default createTheme(deepmerge(core, light));
