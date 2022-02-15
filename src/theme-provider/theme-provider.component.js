import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import themes from 'themes';

/**
 * @param {{
 *  children?: React.ReactNode
 *  theme?: keyof themes
 * }} props
 */
const ThemeProvider = ({ children, theme = 'dark' }) => (
  // <StyledEngineProvider injectFirst>
  <MuiThemeProvider theme={themes[theme]}>{children}</MuiThemeProvider>
  // </StyledEngineProvider>
);

export default ThemeProvider;
