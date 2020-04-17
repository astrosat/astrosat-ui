import React, { useContext, useState, useEffect } from 'react';
import styles from '../index.module.css';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children, defaultTheme = 'dark' }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    changeTheme(theme);
  }, []);

  const changeTheme = newTheme => {
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
  };

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeSwitcher = () => {
  const value = useContext(ThemeContext);
  return value;
};

export { ThemeContext, ThemeProvider, useThemeSwitcher };
