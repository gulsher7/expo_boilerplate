import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NativeCraft - Documentation",
  description: "Complete documentation for the NativeCraft React Native app generator",
};

const DocumentationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">NativeCraft - React Native Mobile App</h1>
        
        <div className="flex gap-2 flex-wrap mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native 0.76.9</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Expo 52.0.16</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript 5.3.3</span>
        </div>

        {/* GitHub Repository Link */}
        <div className="mb-8">
          <a 
            href="https://github.com/gulsher7/expo_boilerplate" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View GitHub Repository
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Project Overview</h2>
        <p>
          NativeCraft is a React Native mobile application built with TypeScript and Expo. 
          It features robust authentication, RTL/LTR language support, dark/light theme capabilities, 
          and a modern UI experience. The app follows a structured, modular architecture with a focus on 
          reusability, scalability, and maintainability.
        </p>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">App Demo Video</h3>
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[600px] rounded-[36px] bg-black border-[14px] border-gray-800 shadow-xl overflow-hidden flex items-center justify-center">
              {/* Phone notch */}
              <div className="absolute top-0 w-[120px] h-[30px] bg-gray-800 rounded-b-[14px] z-10"></div>
              
              {/* Power button */}
              <div className="absolute right-[-14px] top-[120px] h-[60px] w-[4px] bg-gray-700 rounded-r-md"></div>
              
              {/* Volume buttons */}
              <div className="absolute left-[-14px] top-[100px] h-[40px] w-[4px] bg-gray-700 rounded-l-md"></div>
              <div className="absolute left-[-14px] top-[160px] h-[40px] w-[4px] bg-gray-700 rounded-l-md"></div>
              
              <video 
                className="w-full h-full object-cover" 
                controls
                poster="/video-thumbnail.png"
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>🔐 Authentication Flow</strong>: Complete login, signup, and OTP verification</li>
          <li><strong>🌓 Theme Support</strong>: Dynamic light/dark theme switching</li>
          <li><strong>🌐 Multi-language Support</strong>: RTL/LTR with language switching (English/Arabic)</li>
          <li><strong>📱 Responsive Design</strong>: Adapts to different screen sizes and orientations</li>
          <li><strong>🧩 Modular Architecture</strong>: Highly maintainable code structure</li>
          <li><strong>🔄 State Management</strong>: Centralized Redux store with structured actions</li>
          <li><strong>🔒 Secure Storage</strong>: Encrypted local data storage</li>
          <li><strong>📊 API Integration</strong>: Structured API services with proper error handling</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Project Architecture</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
{`src/
├── assets/        # Images, icons, fonts, and other static assets
├── components/    # Reusable UI components
├── config/        # App configuration files
├── context/       # React Context providers (ThemeContext, etc.)
├── hooks/         # Custom React hooks
├── lang/          # i18n translation files
├── models/        # Data models and interfaces
├── navigation/    # Navigation configuration
├── redux/         # State management
├── screens/       # Screen components
├── styles/        # Global styles and themes
├── typings/       # Global TypeScript types
└── utils/         # Utility functions`}
        </pre>

        <h2 className="text-2xl font-bold mt-10 mb-4">Technology Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>React Native (0.76.9)</strong>: Core framework for building the mobile app</li>
          <li><strong>TypeScript (5.3.3)</strong>: For type safety and improved developer experience</li>
          <li><strong>Expo (52.0.16)</strong>: Development platform for React Native</li>
          <li><strong>Redux Toolkit</strong>: For centralized state management</li>
          <li><strong>React Navigation 7.x</strong>: Screen navigation with stack and tab navigators</li>
          <li><strong>i18next</strong>: Internationalization framework</li>
          <li><strong>Axios</strong>: HTTP client for API requests</li>
          <li><strong>Reanimated</strong>: For fluid animations</li>
          <li><strong>Secure Store</strong>: For encrypted local storage</li>
          <li><strong>SVG Support</strong>: For vector graphics</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Setup and Installation</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Prerequisites</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Node.js (LTS version)</li>
          <li>npm or yarn</li>
          <li>Expo CLI</li>
          <li>iOS Simulator or Android Emulator (optional)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Installation Steps</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <p>Clone the repository</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-sm">
{`git clone <repository-url>
cd nativecraft`}
            </pre>
          </li>
          <li>
            <p>Install dependencies</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-sm">
{`npm install
# or
yarn install`}
            </pre>
          </li>
          <li>
            <p>Start the development server</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-sm">
{`npm start
# or
yarn start`}
            </pre>
          </li>
          <li>
            <p>Run on specific platform</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-sm">
{`# iOS
npm run ios

# Android
npm run android`}
            </pre>
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Core Concepts and Implementation</h2>
        
        <h3 className="text-xl font-semibold mt-8 mb-3">Theme System (Dark/Light)</h3>
        <p>
          The app uses a Context-based theming system that allows for seamless switching between light and dark modes:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { secureStorage } from '@/utils/secureStorage';
import { Colors, ThemeType } from '@/styles/colors';

// Usage in components
const { theme, toggleTheme } = useTheme();
const colors = Colors[theme];`}
        </pre>

        <div className="mt-4 mb-6">
          <p className="mb-2"><strong>Key Features:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Theme persistence using Secure Storage</li>
            <li>Dynamic theme switching with context API</li>
            <li>Semantic color naming that adapts to current theme</li>
            <li>Support for system theme detection</li>
          </ul>
        </div>

        <p className="mb-2"><strong>Using Theme Colors:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Component example
import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/styles/colors';

const MyComponent = () => {
  const { theme } = useTheme();
  const colors = Colors[theme];
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Hello World</Text>
    </View>
  );
};`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">Font Management</h3>
        <p>
          Fonts are loaded at application startup and made available through a centralized font family object:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Font loading in App.tsx
const [loaded, error] = useFonts({
  "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
  "Inter-Medium": require("./src/assets/fonts/Inter-Medium.ttf"),
  "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
});

// Usage with fontFamily utility
import fontFamily from '@/styles/fontFamily';

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
  }
});`}
        </pre>

        <p className="mb-2 mt-4"><strong>Font Family Structure:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/styles/fontFamily.ts
export default {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">Internationalization (I18n)</h3>
        <p>
          The app supports multiple languages with full RTL layout support using i18next:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/lang/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import en from './en.json';
import ar from './ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;`}
        </pre>

        <p className="mb-2 mt-4"><strong>Translation Files Structure:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// en.json
{
  "LOGIN": "Login",
  "WELCOME_MESSAGE": "Welcome to NativeCraft"
}

// ar.json
{
  "LOGIN": "تسجيل الدخول",
  "WELCOME_MESSAGE": "مرحبًا بك في NativeCraft"
}`}
        </pre>

        <p className="mb-2 mt-4"><strong>Using Translations:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// With the TextComp wrapper component
<TextComp text="LOGIN" />

// With variable substitution
<TextComp text="HELLO_USER" values={{ name: user.name }} />`}
        </pre>

        <p className="mb-2 mt-4"><strong>RTL Support:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Custom hook for RTL detection
import { useTranslation } from 'react-i18next';

export default function useIsRTL() {
  const { i18n } = useTranslation();
  return i18n.language === 'ar';
}

// Usage in styles
const styles = StyleSheet.create({
  container: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    textAlign: isRTL ? 'right' : 'left',
  }
});`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">Reusable Components</h3>
        <p>
          The app uses a set of standardized components to ensure consistency:
        </p>

        <p className="mb-2 mt-4"><strong>TextComp - Text Component with i18n Support:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Usage
<TextComp text="WELCOME" />
<TextComp isDynamic text="Hello World" /> // Direct text without translation`}
        </pre>

        <p className="mb-2 mt-4"><strong>ButtonComp - Customizable Button:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Usage
<ButtonComp 
  text="LOGIN" 
  onPress={handleLogin}
  variant="primary" // or "secondary", "outline", etc.
  isLoading={isLoading}
/>`}
        </pre>

        <p className="mb-2 mt-4"><strong>TextInputComp - Custom Text Input:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Usage
<TextInputComp
  label="EMAIL"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  isPassword={false}
/>`}
        </pre>

        <p className="mb-2 mt-4"><strong>HeaderComp - App Header:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Usage
<HeaderComp 
  title="PROFILE" 
  showBack={true}
  onBackPress={() => navigation.goBack()}
/>`}
        </pre>

        <p className="mb-2 mt-4"><strong>WrapperContainer - Safe Area Wrapper:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Usage
<WrapperContainer>
  {/* Screen content */}
</WrapperContainer>`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">State Management with Redux</h3>
        <p>
          The app uses Redux Toolkit for centralized state management:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Store setup
// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;`}
        </pre>

        <p className="mb-2 mt-4"><strong>Reducers Structure:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/redux/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import appReducer from './appSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export default rootReducer;`}
        </pre>

        <p className="mb-2 mt-4"><strong>Actions Structure:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/redux/actions/index.ts
import * as authActions from './authActions';
import * as appActions from './appActions';

export default {
  ...authActions,
  ...appActions,
};`}
        </pre>

        <p className="mb-2 mt-4"><strong>Using Redux in Components:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// In a component
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/actions';
import { RootState } from '@/redux/store';

const Component = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  
  const handleLogin = async () => {
    await dispatch(actions.login(credentials));
  };
  
  return (/* Component JSX */);
};`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">API Integration</h3>
        <p>
          The app uses a centralized API service based on Axios:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/config/api.ts
import axios from 'axios';
import { API_BASE_URL } from '@/config/constants';

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiInstance.interceptors.request.use(
  async (config) => {
    // Add authorization token if available
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors (401, 403, 500, etc.)
    return Promise.reject(error);
  }
);

export default apiInstance;`}
        </pre>

        <p className="mb-2 mt-4"><strong>API Actions:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/redux/actions/authActions.ts
import apiInstance from '@/config/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiInstance.post('/auth/login', credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">Secure Local Storage</h3>
        <p>
          The app uses Expo's SecureStore for encrypted storage:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/utils/secureStorage.ts
import * as SecureStore from 'expo-secure-store';

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'AUTH_TOKEN',
  USER_DATA: 'USER_DATA',
  LANGUAGE: 'LANGUAGE',
  THEME: 'THEME',
} as const;

type StorageKeyType = keyof typeof STORAGE_KEYS;

export const secureStorage = {
  async setItem(key: StorageKeyType, value: string) {
    try {
      await SecureStore.setItemAsync(STORAGE_KEYS[key], value);
    } catch (error) {
      console.error('Error storing value:', error);
    }
  },
  
  async getItem(key: StorageKeyType) {
    try {
      return await SecureStore.getItemAsync(STORAGE_KEYS[key]);
    } catch (error) {
      console.error('Error retrieving value:', error);
      return null;
    }
  },
  
  async removeItem(key: StorageKeyType) {
    try {
      await SecureStore.deleteItemAsync(STORAGE_KEYS[key]);
    } catch (error) {
      console.error('Error removing value:', error);
    }
  },
  
  // Helper for storing objects
  async setObject(key: StorageKeyType, value: object) {
    try {
      const jsonValue = JSON.stringify(value);
      await this.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error storing object:', error);
    }
  },
  
  // Helper for retrieving objects
  async getObject(key: StorageKeyType) {
    try {
      const jsonValue = await this.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving object:', error);
      return null;
    }
  },
};`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">SVG Integration</h3>
        <p>
          The app uses react-native-svg and react-native-svg-transformer for SVG support:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// In components
import Logo from '@/assets/icons/logo.svg';

const Component = () => {
  return (
    <View>
      <Logo width={100} height={100} fill={colors.primary} />
    </View>
  );
};`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">Responsive Styling</h3>
        <p>
          The app uses a scaling utility for responsive dimensions:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/styles/scaling.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => 
  size + (horizontalScale(size) - size) * factor;`}
        </pre>

        <p className="mb-2 mt-4"><strong>Using Scale in Styles:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`import { moderateScale } from '@/styles/scaling';

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    marginBottom: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(18),
  },
});`}
        </pre>

        <h2 className="text-2xl font-bold mt-10 mb-4">Navigation Setup</h2>
        <p>
          The app uses React Navigation 7.x with a structured approach:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/navigation/Routes.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import MainStack from './stacks/MainStack';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Routes = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;`}
        </pre>

        <p className="mb-2 mt-4"><strong>Navigation Types:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// src/navigation/types.ts
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  OTPVerification: { email: string };
};

export type MainStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;
  SettingsTab: undefined;
};`}
        </pre>

        <h2 className="text-2xl font-bold mt-10 mb-4">Why This Architecture?</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Modularity and Maintainability</h3>
        <p>
          This modular approach separates concerns clearly, making the codebase more maintainable:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Component Reusability</strong>: UI components are reusable across screens</li>
          <li><strong>Business Logic Separation</strong>: Redux actions/reducers separate business logic from UI</li>
          <li><strong>Theming Abstraction</strong>: Theme is centralized and easily switchable</li>
          <li><strong>Navigation Structure</strong>: Clear navigation hierarchy</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-3">Scalability</h3>
        <p>
          The architecture is designed to scale with your application:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Feature Isolation</strong>: Add new features by adding new directories/modules</li>
          <li><strong>Consistent Patterns</strong>: New developers can follow established patterns</li>
          <li><strong>Performance Optimization</strong>: Easy to optimize specific components</li>
          <li><strong>Testing</strong>: Components are isolated and easier to test</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-3">TypeScript Integration</h3>
        <p>
          TypeScript provides:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Type Safety</strong>: Catch errors at compile time</li>
          <li><strong>IDE Support</strong>: Better autocomplete and documentation</li>
          <li><strong>Refactoring Confidence</strong>: Safer refactoring with type checking</li>
          <li><strong>API Contract Enforcement</strong>: Interface definitions for API responses</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Best Practices</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Code Style</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use functional components with hooks</li>
          <li>Keep components small and focused</li>
          <li>Use descriptive variable and function names</li>
          <li>Document complex logic with comments</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Performance Considerations</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use React.memo for pure components</li>
          <li>Use useCallback for event handlers</li>
          <li>Use useMemo for expensive computations</li>
          <li>Implement virtualized lists for long scrolling content</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Security Best Practices</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Store sensitive data in SecureStore</li>
          <li>Use HTTPS for all API requests</li>
          <li>Sanitize user inputs</li>
          <li>Implement proper token refresh mechanism</li>
        </ul>

        {/* <p className="mt-12 text-sm text-gray-500 border-t pt-4">
          © 2025 NativeCraft. All rights reserved.
        </p> */}
      </div>
    </div>
  );
};

export default DocumentationPage; 