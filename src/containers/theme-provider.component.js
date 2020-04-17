import React, { useContext, useState } from 'react';
import styles from '../index.module.css';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={styles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};

const useThemeSwitcher = () => {
  const value = useContext(ThemeContext);
  return value;
};

export { ThemeContext, ThemeProvider, useThemeSwitcher };
