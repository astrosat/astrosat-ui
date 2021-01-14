import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import themes from 'themes';

/**
 * @param {{
 *  children?: React.ReactNode
 *  theme?: keyof themes
 * }} props
 */
const ThemeProvider = ({ children, theme = 'dark' }) => (
  <MuiThemeProvider theme={themes[theme]}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
