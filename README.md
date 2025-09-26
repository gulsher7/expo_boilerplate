# NativeCraft - React Native Mobile App

![React Native](https://img.shields.io/badge/React_Native-0.81.4-blue)
![Expo](https://img.shields.io/badge/Expo-54.0.10-white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![New Architecture](https://img.shields.io/badge/New_Architecture-Enabled-green)
![Firebase](https://img.shields.io/badge/Firebase-Integrated-orange)

## Project Overview

NativeCraft is a cutting-edge React Native mobile application built with TypeScript and Expo, proudly featuring **React Native's New Architecture** for superior performance and future-proofing. It offers robust authentication, RTL/LTR language support, dark/light theme capabilities, and a modern UI experience. The app follows a structured, modular architecture with a focus on reusability, scalability, and maintainability.

[Check out the app demo video](https://github.com/user-attachments/assets/cb478a0a-a574-4f5e-987a-74bcb6f0e18a)

## Features

- ⚡ **New Architecture Ready**: Built with React Native's New Architecture (Fabric & TurboModules) for enhanced performance
- 🔐 **Authentication Flow**: Complete login, signup, and OTP verification
- 🌓 **Theme Support**: Dynamic light/dark theme switching
- 🌐 **Multi-language Support**: RTL/LTR with language switching (English/Arabic)
- 📱 **Responsive Design**: Adapts to different screen sizes and orientations
- 🧩 **Modular Architecture**: Highly maintainable code structure
- 🔄 **State Management**: Centralized Redux store with structured actions
- 🔒 **Secure Storage**: Encrypted local data storage
- 📊 **API Integration**: Structured API services with proper error handling
- 🔥 **Firebase Integration**: Push notifications and Firebase services support

## Project Architecture

```
src/
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
└── utils/         # Utility functions
```

## Technology Stack

- **React Native (0.81.4)**: Core framework with **New Architecture** enabled (Fabric & TurboModules)
- **TypeScript (5.9.2)**: For type safety and improved developer experience
- **Expo (54.0.10)**: Development platform for React Native
- **Redux Toolkit**: For centralized state management
- **React Navigation 7.x**: Screen navigation with stack and tab navigators
- **i18next**: Internationalization framework
- **Axios**: HTTP client for API requests
- **Reanimated**: For fluid animations with New Architecture compatibility
- **Secure Store**: For encrypted local storage
- **SVG Support**: For vector graphics
- **React Native Firebase**: Firebase services integration (messaging, analytics, etc.)

## Setup and Installation

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)
- Firebase project with configuration files (google-services.json and GoogleService-Info.plist)

### Installation Steps

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd expo_boilerplate
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Firebase Configuration** (Required)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Download `google-services.json` for Android and place it in the project root
   - Download `GoogleService-Info.plist` for iOS and place it in the project root
   - Enable Firebase Messaging and any other required services in your Firebase project

4. **Generate native code** (Required for Firebase)
   ```bash
   npx expo prebuild
   ```
   
   > **Important**: Since this app uses React Native Firebase, you must run `expo prebuild` to generate the native Android and iOS folders. This is required before running the app on devices or simulators.

5. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

6. Run on specific platform
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

### Firebase Setup Notes

- The app includes Firebase configuration for push notifications
- Firebase configuration files (`google-services.json` and `GoogleService-Info.plist`) are already configured in `app.json`
- After adding your Firebase config files, the `expo prebuild` command will properly integrate them into the native projects

## Core Concepts and Implementation

### 🚀 New Architecture (Fabric & TurboModules)

NativeCraft proudly leverages **React Native's New Architecture** for enhanced performance and future-ready development:

**What's Included:**
- **Fabric Renderer**: New rendering system for improved UI performance
- **TurboModules**: Faster native module loading and execution  
- **JSI (JavaScript Interface)**: Direct JavaScript-to-native communication
- **Codegen**: Automatic type-safe native code generation

**Performance Benefits:**
- ⚡ Faster app startup times
- 🎯 Improved UI responsiveness  
- 📱 Better memory management
- 🔄 Smoother animations and transitions

**Configuration:**
```json
// app.json
{
  "expo": {
    "newArchEnabled": true,
    "experiments": {
      "reactCompiler": true
    }
  }
}
```

**Why New Architecture Matters:**
- **Future-Proof**: Built for React Native's roadmap
- **Performance**: Significant improvements in rendering and native communication
- **Developer Experience**: Better debugging and development tools
- **Ecosystem**: Growing support from popular libraries

> 💡 **Pro Tip**: The New Architecture is the future of React Native development, and NativeCraft is built from the ground up to take advantage of these improvements!

### Theme System (Dark/Light)

The app uses a Context-based theming system that allows for seamless switching between light and dark modes:

```typescript
// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { secureStorage } from '@/utils/secureStorage';
import { Colors, ThemeType } from '@/styles/colors';

// Usage in components
const { theme, toggleTheme } = useTheme();
const colors = Colors[theme];
```

**Key Features:**
- Theme persistence using Secure Storage
- Dynamic theme switching with context API
- Semantic color naming that adapts to current theme
- Support for system theme detection

**Using Theme Colors:**
```typescript
// Component example
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
};
```

### Font Management

Fonts are loaded at application startup and made available through a centralized font family object:

```typescript
// Font loading in App.tsx
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
});
```

**Font Family Structure:**
```typescript
// src/styles/fontFamily.ts
export default {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};
```

### Internationalization (I18n)

The app supports multiple languages with full RTL layout support using i18next:

```typescript
// src/lang/index.ts
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

export default i18n;
```

**Translation Files Structure:**
```json
// en.json
{
  "LOGIN": "Login",
  "WELCOME_MESSAGE": "Welcome to NativeCraft"
}

// ar.json
{
  "LOGIN": "تسجيل الدخول",
  "WELCOME_MESSAGE": "مرحبًا بك في NativeCraft"
}
```

**Using Translations:**
```typescript
// With the TextComp wrapper component
<TextComp text="LOGIN" />

// With variable substitution
<TextComp text="HELLO_USER" values={{ name: user.name }} />
```

**RTL Support:**
```typescript
// Custom hook for RTL detection
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
});
```

### Reusable Components

The app uses a set of standardized components to ensure consistency:

**TextComp - Text Component with i18n Support:**
```typescript
// Usage
<TextComp text="WELCOME" />
<TextComp isDynamic text="Hello World" /> // Direct text without translation
```

**ButtonComp - Customizable Button:**
```typescript
// Usage
<ButtonComp 
  text="LOGIN" 
  onPress={handleLogin}
  variant="primary" // or "secondary", "outline", etc.
  isLoading={isLoading}
/>
```

**TextInputComp - Custom Text Input:**
```typescript
// Usage
<TextInputComp
  label="EMAIL"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  isPassword={false}
/>
```

**HeaderComp - App Header:**
```typescript
// Usage
<HeaderComp 
  title="PROFILE" 
  showBack={true}
  onBackPress={() => navigation.goBack()}
/>
```

**WrapperContainer - Safe Area Wrapper:**
```typescript
// Usage
<WrapperContainer>
  {/* Screen content */}
</WrapperContainer>
```

### State Management with Redux

The app uses Redux Toolkit for centralized state management:

```typescript
// Store setup
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
export default store;
```

**Reducers Structure:**
```typescript
// src/redux/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import appReducer from './appSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export default rootReducer;
```

**Actions Structure:**
```typescript
// src/redux/actions/index.ts
import * as authActions from './authActions';
import * as appActions from './appActions';

export default {
  ...authActions,
  ...appActions,
};
```

**Using Redux in Components:**
```typescript
// In a component
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
};
```

### API Integration

The app uses a centralized API service based on Axios:

```typescript
// src/config/api.ts
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
      config.headers.Authorization = `Bearer ${token}`;
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

export default apiInstance;
```

**API Actions:**
```typescript
// src/redux/actions/authActions.ts
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
);
```

### Secure Local Storage

The app uses Expo's SecureStore for encrypted storage:

```typescript
// src/utils/secureStorage.ts
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
};
```

### Firebase Integration

The app uses React Native Firebase for push notifications and other Firebase services:

```typescript
// Firebase messaging setup
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

// Request notification permission (iOS)
const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

// Get FCM token
const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.log('Error getting FCM token:', error);
  }
};

// Handle foreground messages
messaging().onMessage(async remoteMessage => {
  console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
});

// Handle background messages
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
```

**Firebase Configuration Files:**
- `google-services.json`: Android configuration file
- `GoogleService-Info.plist`: iOS configuration file
- Both files are automatically integrated during the `expo prebuild` process

**Firebase Services Available:**
- Push Notifications (Firebase Cloud Messaging)
- Analytics (if configured)
- Crashlytics (if configured)
- Remote Config (if configured)

### SVG Integration

The app uses react-native-svg and react-native-svg-transformer for SVG support:

```typescript
// In components
import Logo from '@/assets/icons/logo.svg';

const Component = () => {
  return (
    <View>
      <Logo width={100} height={100} fill={colors.primary} />
    </View>
  );
};
```

### Responsive Styling

The app uses a scaling utility for responsive dimensions:

```typescript
// src/styles/scaling.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => 
  size + (horizontalScale(size) - size) * factor;
```

**Using Scale in Styles:**
```typescript
import { moderateScale } from '@/styles/scaling';

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    marginBottom: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(18),
  },
});
```

## Navigation Setup

The app uses React Navigation 7.x with a structured approach:

```typescript
// src/navigation/Routes.tsx
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

export default Routes;
```

**Navigation Types:**
```typescript
// src/navigation/types.ts
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
};
```

## Why This Architecture?

### Modularity and Maintainability

This modular approach separates concerns clearly, making the codebase more maintainable:

1. **Component Reusability**: UI components are reusable across screens
2. **Business Logic Separation**: Redux actions/reducers separate business logic from UI
3. **Theming Abstraction**: Theme is centralized and easily switchable
4. **Navigation Structure**: Clear navigation hierarchy

### Scalability

The architecture is designed to scale with your application:

1. **Feature Isolation**: Add new features by adding new directories/modules
2. **Consistent Patterns**: New developers can follow established patterns
3. **Performance Optimization**: Easy to optimize specific components
4. **Testing**: Components are isolated and easier to test

### TypeScript Integration

TypeScript provides:

1. **Type Safety**: Catch errors at compile time
2. **IDE Support**: Better autocomplete and documentation
3. **Refactoring Confidence**: Safer refactoring with type checking
4. **API Contract Enforcement**: Interface definitions for API responses

## Troubleshooting

### Firebase Issues

**Error: "No Firebase App '[DEFAULT]' has been created"**
- Ensure `google-services.json` and `GoogleService-Info.plist` are in the project root
- Run `npx expo prebuild --clean` to regenerate native folders
- Check that Firebase plugins are properly configured in `app.json`

**Build errors after adding Firebase**
- Clear Metro cache: `npx expo start --clear`
- Clean prebuild: `npx expo prebuild --clean`
- For iOS: `cd ios && pod install`

**Push notifications not working**
- Verify Firebase project has Cloud Messaging enabled
- Check that the correct bundle identifier/package name is used in Firebase
- For iOS: Ensure APNs certificate is uploaded to Firebase
- Test on physical devices (push notifications don't work on simulators)

### Common Prebuild Issues

**"expo prebuild" fails**
- Delete `android/` and `ios/` folders
- Run `npx expo prebuild --clean`
- Ensure all required config files are present

**Metro bundler issues**
- Clear cache: `npx expo start --clear`
- Reset Metro: `npx expo start --reset-cache`
- Check for conflicting dependencies

## Best Practices

### Code Style

- Use functional components with hooks
- Keep components small and focused
- Use descriptive variable and function names
- Document complex logic with comments

### Performance Considerations

- Use React.memo for pure components
- Use useCallback for event handlers
- Use useMemo for expensive computations
- Implement virtualized lists for long scrolling content

### Security Best Practices

- Store sensitive data in SecureStore
- Use HTTPS for all API requests
- Sanitize user inputs
- Implement proper token refresh mechanism

### Firebase Best Practices

- Always handle Firebase initialization errors
- Implement proper token refresh for FCM
- Use Firebase rules for data security
- Monitor Firebase usage and quotas

### New Architecture Best Practices

- **Component Design**: Build components with New Architecture in mind for optimal performance
- **Native Modules**: Use TurboModules-compatible libraries when possible
- **Testing**: Test thoroughly on New Architecture to catch compatibility issues early
- **Performance Monitoring**: Leverage the improved performance metrics available
- **Future-Proofing**: Stay updated with React Native's New Architecture roadmap

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 NativeCraft. All rights reserved.
