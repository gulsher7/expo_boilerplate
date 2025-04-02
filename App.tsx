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
const App = () => {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./src/assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    getLocalItem();
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
