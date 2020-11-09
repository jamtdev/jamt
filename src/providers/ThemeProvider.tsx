import React, { useEffect, useState } from 'react';
import { ThemeKey, colours } from 'src/config/theme';

type ThemeContextValue = {
  theme: ThemeKey;
  changeTheme: (key: ThemeKey) => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>(
  (undefined as unknown) as ThemeContextValue
);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeKey>('LIGHT');

  useEffect(() => {
    const root = document.documentElement;

    const initialTheme = root.style.getPropertyValue(
      '--initial-theme'
    ) as ThemeKey;

    setTheme(initialTheme);
  }, []);

  const changeTheme = (key: ThemeKey) => {
    setTheme(key);

    localStorage.setItem('theme', key);

    const root = document.documentElement;

    Object.entries(colours).forEach(([name, coloursByKey]) => {
      const cssVarName = `--${name}`;

      root.style.setProperty(cssVarName, coloursByKey[key]);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
