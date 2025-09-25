/**
 * @file App.tsx
 * @description Root application component that initializes core app functionality
 * including fonts, internationalization, Redux store, and navigation.
 * 
 * This component handles:
 * - Custom font loading
 * - RTL configuration (explicitly disabled for controlled management)
 * - Theme initialization and provider setup
 * - Redux store integration
 * - Safe area handling for notched devices
 * - SplashScreen management
 */

import "@/lang";
import Routes from '@/navigation/Routes';
import store from "@/redux/store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from 'react';
import { I18nManager } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { ThemeProvider } from '@/context/ThemeContext';
import { getLocalItem } from "@/utils/checkStorage";
import { requestUserPermission } from "helper/notifciationService";

/**
 * Main application component that serves as the entry point for the app.
 * 
 * @returns {JSX.Element | null} The rendered app or null during font loading
 */
const App = () => {
  /**
   * Load custom fonts using Expo's useFonts hook
   * 
   * @remarks
   * The app uses Inter font family with various weights
   * loaded asynchronously at startup
   * 
   * @returns {[boolean, Error | null]} Tuple containing loading status and potential error
   */
  const [loaded, error] = useFonts({
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./src/assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  /**
   * Setup effect hook that runs on component mount and when font loading status changes
   * 
   * @effects
   * - Configures RTL behavior (currently disabled for manual control)
   * - Initializes storage by retrieving persisted user settings
   * - Hides the splash screen once fonts are loaded or an error occurs
   */
  useEffect(() => {
    // Disable automatic RTL handling - we manage this explicitly through i18n
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    
    // Initialize app from stored user preferences (theme, language, auth state)
    getLocalItem();

    // Initialize Firebase
    requestUserPermission()
    
    // Hide splash screen once fonts are loaded or if there was an error
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Return null during font loading to avoid rendering with incorrect fonts
  if (!loaded && !error) {
    return null;
  }

  /**
   * Main app structure with providers in the following order:
   * 1. SafeAreaProvider - Handles safe areas for notched devices
   * 2. Redux Provider - Provides global state management
   * 3. ThemeProvider - Manages light/dark theme
   * 4. Routes - Navigation container and routing structure
   */
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
