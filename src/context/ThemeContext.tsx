/**
 * @file ThemeContext.tsx
 * @description Theme context provider for managing app-wide light/dark theme.
 * Handles theme switching, persistence, and system theme detection.
 */

import { useSelector } from '@/redux/hooks';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

/**
 * Theme type definition representing the two available themes
 * @typedef {'light' | 'dark'} ThemeType
 */
type ThemeType = 'light' | 'dark';

/**
 * Theme context properties interface
 * @interface ThemeContextProps
 * @property {ThemeType} theme - Current active theme ('light' or 'dark')
 * @property {() => void} toggleTheme - Function to switch between light and dark themes
 */
interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

/**
 * Context for theme management with default values
 * @type {React.Context<ThemeContextProps>}
 */
const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => { },
});

/**
 * Theme provider component that manages theme state and provides it to child components
 * 
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components that will have access to theme context
 * @returns {JSX.Element} Provider component with theme context
 * 
 * @example
 * // In App.tsx
 * <ThemeProvider>
 *   <YourApp />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get system color scheme (light/dark)
  const colorScheme: ColorSchemeName = Appearance.getColorScheme();
  
  // Get user's theme preference from Redux store
  const { defaultTheme } = useSelector(state => state.settings);
  
  /**
   * Initialize theme state with priority:
   * 1. User-selected theme from Redux store
   * 2. System color scheme
   * 3. Default to 'light' theme
   */
  const [theme, setTheme] = useState<ThemeType>(
    (defaultTheme?.myTheme as ThemeType) || (colorScheme === 'dark' ? 'dark' : 'light')
  );

  /**
   * Toggle between light and dark themes
   * @function toggleTheme
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  /**
   * Effect to update theme when the Redux store changes
   * This happens when user explicitly changes theme in settings
   */
  useEffect(() => {
    if (defaultTheme?.myTheme) {
      setTheme(defaultTheme.myTheme as ThemeType);
    }
  }, [defaultTheme?.myTheme]);

  /**
   * Effect to handle system theme changes
   * Only applies if user hasn't explicitly set a theme preference
   */
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

/**
 * Custom hook for consuming the theme context
 * 
 * @function useTheme
 * @returns {ThemeContextProps} Theme context object with current theme and toggle function
 * 
 * @example
 * // In a component
 * const { theme, toggleTheme } = useTheme();
 * 
 * // Use theme to style components
 * const backgroundColor = theme === 'dark' ? '#121212' : '#ffffff';
 */
export const useTheme = () => useContext(ThemeContext);
