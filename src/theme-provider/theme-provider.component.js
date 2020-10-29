import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import themes from 'themes';
import styles from '../index.module.css';

/**
 * @param {{
 *  children?: React.ReactNode
 *  theme?: keyof themes
 * }} props
 */
const ThemeProvider = ({ children, theme = 'dark' }) => (
  <div className={styles.dark}>
    <MuiThemeProvider theme={themes[theme]}>{children}</MuiThemeProvider>
  </div>
);

export default ThemeProvider;
