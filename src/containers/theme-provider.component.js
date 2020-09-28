import React, { useCallback, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import themes from 'themes';
import styles from '../index.module.css';

const ThemeContext = React.createContext(undefined);

const ThemeProvider = ({ children, defaultTheme = 'dark' }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = useCallback(
    newTheme => {
      if (!styles[newTheme]) {
        console.warn(
          `You've tried to set the theme to ${newTheme} which doesn't exist. Please check the theme name and try again`
        );
      }
      if (!document.body.classList.contains(styles[newTheme])) {
        if (document.body.classList.contains(styles[theme])) {
          document.body.classList.replace(styles[theme], styles[newTheme]);
        } else {
          document.body.classList.add(styles[newTheme]);
        }
        setTheme(newTheme);
      }
    },
    [theme, setTheme]
  );

  useEffect(() => {
    changeTheme(theme);
  }, [theme, changeTheme]);

  return (
    <MuiThemeProvider theme={themes[defaultTheme]}>
      <ThemeContext.Provider value={[theme, changeTheme]}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

const useThemeSwitcher = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useThemeSwitcher };
