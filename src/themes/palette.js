import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
  palette: {
    primary: { main: '#f6be00' },
    secondary: { main: '#333f48' },
    success: { main: '#6cc24a' },
    error: { main: '#cf6679' },
    info: { main: '#48a9c5' },
    text: {
      disabled: '#616161',
    },
    action: {
      disabledBackground: '#e0e0e0',
    },
    background: {
      paper: '#5d666e',
      default: '#ffffff',
    },
  },
  typography: { fontFamily: '"Open Sans", sans-serif' },
});
