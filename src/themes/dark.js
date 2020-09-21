import { createMuiTheme } from '@material-ui/core';

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#f6be00' },
    secondary: { main: '#333f48' },
    success: { main: '#6cc24a' },
    error: { main: '#cf6679' },
    info: { main: '#48a9c5' }
  },
  typography: {
    fontFamily: "'Open Sans' sans-serif"
  }
});
