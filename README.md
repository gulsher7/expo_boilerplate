# NativeCraft - React Native Mobile App

![React Native](https://img.shields.io/badge/React_Native-0.76.3-blue)
![Expo](https://img.shields.io/badge/Expo-52.0.16-white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)

## Project Overview

NativeCraf is a React Native mobile application built with TypeScript and Expo. It features robust authentication, RTL/LTR language support, dark/light theme capabilities, and a modern UI experience. The app follows a structured architecture with a focus on reusability, scalability, and maintainability.

## Project Architecture

```
src/
├── assets/        # Images, icons, fonts, and other static assets
├── components/    # Reusable UI components
├── context/       # React Context providers (ThemeContext, etc.)
├── hooks/         # Custom React hooks
├── lang/          # i18n translation files
├── models/        # Data models and interfaces
├── navigation/    # Navigation configuration
├── redux/         # State management
├── screens/       # Screen components
├── styles/        # Global styles and themes
├── typings/       # Global TypeScript types
├── constants/     # Global constants
└── utils/         # Utility functions
```

## Technology Stack & Packages Used

- **React Native (0.76.3)**: Core framework for building the mobile app
- **Expo (52.0.16)**: Development platform to simplify React Native development
- **TypeScript (5.3.3)**: For type safety and improved developer experience
- **Redux Toolkit (2.6.1)**: For centralized state management
- **React Navigation (7.x)**: For handling navigation between screens
  - Bottom Tabs (7.3.4)
  - Native Stack (7.3.3)
- **i18next & react-i18next**: For internationalization and language support
- **expo-secure-store**: For secure local storage
- **react-native-modal**: For handling modal components
- **react-native-svg**: For SVG support
- **axios**: For API requests
- **react-native-reanimated**: For advanced animations

## Dark & Light Theme Handling

The app implements a complete theme system:

- **ThemeContext.tsx**: Context provider that manages theme state
- **Colors.ts**: Defines color schemes for both light and dark modes
- **Theme Persistence**: Preferences are saved in secure storage
- **Dynamic Switching**: Theme changes are reflected instantly
- **Auto Detection**: Default theme based on device preference

```typescript
// Theme switching mechanism
const changedTheme = async () => {
  const newTheme = defaultTheme.myTheme === 'light' ? 'dark' : 'light';
  await secureStorage.setItem('THEME', newTheme);
  toggleTheme();
};
```

## RTL & LTR Support

The app fully supports Right-to-Left (RTL) and Left-to-Right (LTR) layouts:

- **useIsRTL**: Custom hook to check current language direction
- **RTL-aware Styles**: Conditional styles based on text direction
- **FlexDirection Handling**: Automatic layout adjustment

```typescript
// RTL-aware style example
container: {
  flexDirection: isRTL ? 'row-reverse' : 'row',
  alignItems: 'center',
  // ...other styles
}
```

## Localization

The app uses i18next for comprehensive internationalization:

- **Language Files**: Located in `/src/lang/`
  - `en.json`: English translations
  - `ar.json`: Arabic translations
- **TextComp**: Custom Text component that handles translations
- **Language Persistence**: Settings saved in secure storage
- **Dynamic Translation**: Strings loaded based on current language

```typescript
// TextComp usage example
<TextComp text="WELCOME_MESSAGE" values={{ value: userData.name }} />
```

## State Management

Redux is used for global state management with a structured approach:

- **Redux Toolkit**: For simplified Redux configuration
- **Store Structure**:
  - `/redux/store.ts`: Central Redux store
  - `/redux/reducers/`: Slice reducers (auth, settings, etc.)
  - `/redux/actions/`: Action creators
- **Typed Selectors**: Custom hooks for type-safe state selection
- **Persistence**: Important state is persisted using secure storage

## API Integration

Axios is used for API requests with a structured approach:

- **Axios Instance**: Configured with base URL and interceptors
- **API Services**: Organized by feature or entity
- **Error Handling**: Centralized error processing
- **Type Safety**: Request and response types defined for each endpoint

## Local Storage Handling

The app uses Expo's SecureStore for safe data persistence:

- **secureStorage.ts**: Wrapper utility for SecureStore operations
- **Storage Keys**: Centralized definition of storage keys
- **Type Safety**: Typed storage functions to prevent errors
- **Object Storage**: Helpers for storing/retrieving JSON objects

```typescript
// Secure storage example
export const secureStorage = {
  async setItem(key: StorageKeyType, value: string) {
    try {
      await SecureStore.setItemAsync(STORAGE_KEYS[key], value);
    } catch (error) {
      console.error('Error storing value:', error);
    }
  },
  // Other methods...
};
```

## Navigation Setup

The app uses React Navigation 7.x with a structured navigation tree:

- **Routes.tsx**: Root navigation container and initial setup
- **Navigation Types**: TypeScript interfaces for route parameters
- **Stack Structure**:
  - `AuthStack`: Login, Signup, OTPVerification screens
  - `MainStack`: Tab-based main app flow
- **Custom Components**: Custom tab bar and header components

## Reusable Components

The app employs reusable components for UI consistency:

- **BasicComponents**: 
  - `TextComp`: Text with translation support
  - `ButtonComp`: Customizable button
  - `TextInputComp`: Styled input fields
  - `HeaderComp`: App header with navigation
  - `WrapperContainer`: Screen wrapper with safe areas
  - `ModalComp`: Modal with consistent styling
- **Naming Convention**: PascalCase for component files
- **Props Pattern**: Well-defined prop interfaces with sensible defaults

## Fonts, Images & Colors

- **Fonts**: 
  - Stored in `/src/assets/fonts/`
  - Family definitions in `fontFamily.ts`
  - Loaded via Expo's Font API
- **Colors**: 
  - Defined in `colors.ts` with semantic naming
  - Light/dark variants for each color
- **Icons/Images**: 
  - SVG icons imported from `/src/assets/icons/`
  - Images managed with Expo's Image component

## Scaling & Responsiveness

The app handles different screen sizes through:

- **scaling.js**: Utility for responsive sizing
  - `moderateScale()`: For dimensions that scale with screen size
  - `horizontalScale()`: For width-based scaling
  - `verticalScale()`: For height-based scaling
- **Safe Areas**: Proper handling of notches and system UI
- **Flex Layouts**: Use of flexbox for adaptive layouts

## Build & Run Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on specific platforms**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## Coding Standards

- **TypeScript**: Strong typing throughout the codebase
- **Component Structure**: 
  - Functional components with hooks
  - Props interfaces for all components
- **Style Organization**:
  - Component-specific styles using StyleSheet.create
  - Common styles in theme files
- **Import Order**:
  1. React/React Native imports
  2. Third-party libraries
  3. Application components/utilities
- **Naming Conventions**:
  - PascalCase for components and types
  - camelCase for functions and variables
  - UPPERCASE for constants

## Environment Configuration

- **Expo Config**: Configuration in `app.json`
- **Environment Variables**: Handled through Expo's configuration

## Folder Responsibility

- **/assets/**: All static assets (images, icons, fonts)
- **/components/**: Reusable UI components
- **/context/**: React Context providers
- **/hooks/**: Custom React hooks
- **/lang/**: Translation files and i18n setup
- **/models/**: TypeScript interfaces and type definitions
- **/navigation/**: Navigation configuration and components
- **/redux/**: State management
- **/screens/**: Screen components
- **/styles/**: Style utilities and theme definitions
- **/utils/**: Helper functions and utilities

## How to Add a New Screen

1. **Create the screen component** in `/src/screens/ScreenName/ScreenName.tsx`
2. **Add the screen to navigation types** in `/src/navigation/types.ts`
3. **Register the screen** in the appropriate navigator
4. **Add translations** for the screen's text
5. **Export the screen** from the screens index file

```typescript
// 1. Add to types.ts
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  NewScreen: { param1: string }; // Add your new screen with params
};

// 2. Add to navigator
<Stack.Screen name="NewScreen" component={NewScreen} />

// 3. Export from index
export { default as NewScreen } from './NewScreen/NewScreen';
```

## Special Notes

- **OTP Verification**: The app includes a complete OTP verification flow
- **Secure Storage**: Critical data is stored in secure storage
- **Modal Management**: Custom modal implementation with handle UI
- **Error Handling**: Centralized error management
- **Theme Toggle**: Users can manually switch between light and dark themes
- **Language Selection**: Users can switch between English and Arabic
- **Navigation State**: Navigation state is preserved across app restarts
- **Authentication Flow**: Complete authentication with token management

---

© 2025 NativeCraft. All rights reserved.
