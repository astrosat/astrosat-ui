import { createTheme, alpha } from '@mui/material/styles';

import { coreTheme } from './core';

const light = {
  palette: {
    mode: 'light',
    text: {
      primary: coreTheme.palette.secondary.main,
      secondary: coreTheme.palette.secondary.main,
      disabled: alpha(coreTheme.palette.secondary.main, 0.5),
    },
    background: { default: coreTheme.palette.grey[100] },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: coreTheme.palette.secondary.main,
        },
        shrink: {
          color: coreTheme.palette.secondary.main,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: coreTheme.palette.secondary.main,
          '&:hover': {
            backgroundColor: alpha(
              coreTheme.palette.secondary.main,
              coreTheme.palette.action.hoverOpacity
            ),
          },
        },
      },
    },
  },
};

const lightTheme = createTheme(coreTheme, light);
export default lightTheme;
