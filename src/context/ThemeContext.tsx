import { useSelector } from '@/redux/hooks';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme: ColorSchemeName = Appearance.getColorScheme();
  const { defaultTheme } = useSelector(state => state.settings);
  const [theme, setTheme] = useState<ThemeType>(
    (defaultTheme?.myTheme as ThemeType) || (colorScheme === 'dark' ? 'dark' : 'light')
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (defaultTheme?.myTheme) {
      setTheme(defaultTheme.myTheme as ThemeType);
    }
  }, [defaultTheme?.myTheme]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (!defaultTheme?.myTheme) {
        setTheme(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });
    return () => subscription.remove();
  }, [defaultTheme?.myTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
