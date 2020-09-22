import { createMuiTheme } from '@material-ui/core';
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
  palette,
  shape: {
    borderRadius: 5
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    button: {
      fontSize: '18px',
      fontWeight: 600,
      textTransform: 'none'
    }
  }
});
