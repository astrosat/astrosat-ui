import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
  palette: {
    primary: { main: '#f6be00' },
    secondary: { main: '#333f48' },
    success: { main: '#6cc24a' },
    error: { main: '#cf6679' },
    info: { main: '#48a9c5' },
    background: {
      default: '#333f48',
      paper: '#5d666e',
    },
  },
});

console.log('BASE THEME: ', baseTheme);
