import { createMuiTheme, fade } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

const palette = createPalette({
  type: 'dark',
  primary: { main: '#f6be00' },
  secondary: { main: '#333f48' },
  success: { main: '#6cc24a' },
  error: { main: '#cf6679' },
  info: { main: '#48a9c5' },
  text: { primary: '#f8f8f8', secondary: '#f8f8f8' },
  background: { default: '#333f48' }
});

export const dark = createMuiTheme({
  overrides: {
    MuiButton: {
      textSecondary: {
        color: palette.info.main,
        '&:hover': {
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      containedSecondary: {
        backgroundColor: palette.info.main,
        '&:hover': {
          backgroundColor: palette.info.main,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: palette.info.main
          }
        }
      },
      outlinedSecondary: {
        color: palette.info.main,
        borderColor: fade(palette.info.main, 0.5),
        '&:hover': {
          borderColor: palette.info.main,
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          borderColor: palette.action.disabled
        }
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true
    }
  },
  palette,
  shape: {
    borderRadius: 5
  },
  props: {
    MuiCheckbox: {
      disableRipple: true
    }
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    button: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 'normal',
      textTransform: 'none'
    }
  }
});
