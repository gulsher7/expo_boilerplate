import VideoComp from "@/components/ui/VideoComp";
import { Metadata } from "next";
import Link from "next/link";
import CoreConcept from "@/components/CoreConcept";

export const metadata: Metadata = {
  title: "NativeCraft - Expo Documentation",
  description: "Documentation for the NativeCraft React Native Expo boilerplate",
};

const ExpoDocumentationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="mb-8">
          <Link
            href="/documentation"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Documentation
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">React Native Expo</h1>
        
        <div className="flex gap-2 flex-wrap mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native 0.81.4</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Expo 54.0.10</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript 5.9.2</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">New Architecture</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Firebase</span>
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
          NativeCraft is a cutting-edge React Native mobile application built with TypeScript and Expo, 
          proudly featuring <strong>React Native's New Architecture</strong> for superior performance and 
          future-proofing. It offers robust authentication, RTL/LTR language support, dark/light theme 
          capabilities, and a modern UI experience. The app follows a structured, modular architecture 
          with a focus on reusability, scalability, and maintainability.
        </p>

        <VideoComp />

        <h2 className="text-2xl font-bold mt-10 mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>⚡ New Architecture Ready</strong>: Built with React Native's New Architecture (Fabric & TurboModules) for enhanced performance</li>
          <li><strong>🔐 Authentication Flow</strong>: Complete login, signup, and OTP verification</li>
          <li><strong>🌓 Theme Support</strong>: Dynamic light/dark theme switching</li>
          <li><strong>🌐 Multi-language Support</strong>: RTL/LTR with language switching (English/Arabic)</li>
          <li><strong>📱 Responsive Design</strong>: Adapts to different screen sizes and orientations</li>
          <li><strong>🧩 Modular Architecture</strong>: Highly maintainable code structure</li>
          <li><strong>🔄 State Management</strong>: Centralized Redux store with structured actions</li>
          <li><strong>🔒 Secure Storage</strong>: Encrypted local data storage</li>
          <li><strong>📊 API Integration</strong>: Structured API services with proper error handling</li>
          <li><strong>🔥 Firebase Integration</strong>: Push notifications and Firebase services support</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Project Architecture</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm mb-8">
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
├── typings/      # Global TypeScript types
└── utils/        # Utility functions`}
        </pre>

        <h2 className="text-2xl font-bold mt-10 mb-4">Technology Stack</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>React Native (0.81.4)</strong>: Core framework with <strong>New Architecture</strong> enabled (Fabric & TurboModules)</li>
          <li><strong>TypeScript (5.9.2)</strong>: For type safety and improved developer experience</li>
          <li><strong>Expo (54.0.10)</strong>: Development platform for React Native</li>
          <li><strong>Redux Toolkit</strong>: For centralized state management</li>
          <li><strong>React Navigation 7.x</strong>: Screen navigation with stack and tab navigators</li>
          <li><strong>i18next</strong>: Internationalization framework</li>
          <li><strong>Axios</strong>: HTTP client for API requests</li>
          <li><strong>Reanimated</strong>: For fluid animations with New Architecture compatibility</li>
          <li><strong>Secure Store</strong>: For encrypted local storage</li>
          <li><strong>SVG Support</strong>: For vector graphics</li>
          <li><strong>React Native Firebase</strong>: Firebase services integration (messaging, analytics, etc.)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Setup and Installation</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Prerequisites</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Node.js (LTS version)</li>
          <li>npm or yarn</li>
          <li>Expo CLI</li>
          <li>iOS Simulator or Android Emulator (optional)</li>
          <li>Firebase project with configuration files (google-services.json and GoogleService-Info.plist)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Installation Steps</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <p>Clone the repository</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-sm">
{`git clone https://github.com/gulsher7/expo_boilerplate.git
cd expo_boilerplate`}
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
            <p><strong>Firebase Configuration</strong> (Required)</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Create a Firebase project at <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Firebase Console</a></li>
              <li>Download <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">google-services.json</code> for Android and place it in the project root</li>
              <li>Download <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">GoogleService-Info.plist</code> for iOS and place it in the project root</li>
              <li>Enable Firebase Messaging and any other required services in your Firebase project</li>
            </ul>
          </li>
          <li>
            <p><strong>Generate native code</strong> (Required for Firebase)</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-sm">
{`npx expo prebuild`}
            </pre>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mt-2">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important:</strong> Since this app uses React Native Firebase, you must run <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">expo prebuild</code> to generate the native Android and iOS folders. This is required before running the app on devices or simulators.
              </p>
            </div>
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

        <h3 className="text-xl font-semibold mt-6 mb-3">Firebase Setup Notes</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>The app includes Firebase configuration for push notifications</li>
          <li>Firebase configuration files (<code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">google-services.json</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">GoogleService-Info.plist</code>) are already configured in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app.json</code></li>
          <li>After adding your Firebase config files, the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">expo prebuild</code> command will properly integrate them into the native projects</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Core Concepts and Implementation</h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">🚀 New Architecture (Fabric & TurboModules)</h3>
        <p className="mb-4">
          NativeCraft proudly leverages <strong>React Native's New Architecture</strong> for enhanced performance and future-ready development:
        </p>
        
        <h4 className="text-lg font-semibold mt-6 mb-3">What's Included:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Fabric Renderer</strong>: New rendering system for improved UI performance</li>
          <li><strong>TurboModules</strong>: Faster native module loading and execution</li>
          <li><strong>JSI (JavaScript Interface)</strong>: Direct JavaScript-to-native communication</li>
          <li><strong>Codegen</strong>: Automatic type-safe native code generation</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-3">Performance Benefits:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>⚡ Faster app startup times</li>
          <li>🎯 Improved UI responsiveness</li>
          <li>📱 Better memory management</li>
          <li>🔄 Smoother animations and transitions</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>💡 Pro Tip:</strong> The New Architecture is the future of React Native development, and NativeCraft is built from the ground up to take advantage of these improvements!
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">🌓 Theme System (Dark/Light)</h3>
        <p className="mb-4">
          The app uses a Context-based theming system that allows for seamless switching between light and dark modes:
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-3">Key Features:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Theme persistence using Secure Storage</li>
          <li>Dynamic theme switching with context API</li>
          <li>Semantic color naming that adapts to current theme</li>
          <li>Support for system theme detection</li>
        </ul>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm mt-4">
{`// Usage in components
const { theme, toggleTheme } = useTheme();
const colors = Colors[theme];

// Component example
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

        <h3 className="text-xl font-semibold mt-8 mb-4">🔤 Font Management</h3>
        <p className="mb-4">
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

        <h3 className="text-xl font-semibold mt-8 mb-4">🌐 Internationalization (I18n)</h3>
        <p className="mb-4">
          The app supports multiple languages with full RTL layout support using i18next:
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-3">Using Translations:</h4>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// With the TextComp wrapper component
<TextComp text="LOGIN" />

// With variable substitution
<TextComp text="HELLO_USER" values={{ name: user.name }} />

// RTL Support
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

        <h3 className="text-xl font-semibold mt-8 mb-4">🧩 Reusable Components</h3>
        <p className="mb-4">
          The app uses a set of standardized components to ensure consistency:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold mb-2">TextComp - Text Component with i18n Support:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm">
{`<TextComp text="WELCOME" />
<TextComp isDynamic text="Hello World" />`}
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">ButtonComp - Customizable Button:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm">
{`<ButtonComp 
  text="LOGIN" 
  onPress={handleLogin}
  variant="primary"
  isLoading={isLoading}
/>`}
            </pre>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">🔄 State Management with Redux</h3>
        <p className="mb-4">
          The app uses Redux Toolkit for centralized state management:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Using Redux in Components
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

        <h3 className="text-xl font-semibold mt-8 mb-4">📡 API Integration</h3>
        <p className="mb-4">
          The app uses a centralized API service based on Axios with automatic token handling and error management:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// API Actions with Redux Toolkit
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

        <h3 className="text-xl font-semibold mt-8 mb-4">🔒 Secure Local Storage</h3>
        <p className="mb-4">
          The app uses Expo's SecureStore for encrypted storage with helper methods for objects:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Storage usage
import { secureStorage } from '@/utils/secureStorage';

// Store data
await secureStorage.setItem('AUTH_TOKEN', token);
await secureStorage.setObject('USER_DATA', userData);

// Retrieve data
const token = await secureStorage.getItem('AUTH_TOKEN');
const userData = await secureStorage.getObject('USER_DATA');`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-4">🔥 Firebase Integration</h3>
        <p className="mb-4">
          The app uses React Native Firebase for push notifications and other Firebase services:
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-3">Firebase Services Available:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Push Notifications (Firebase Cloud Messaging)</li>
          <li>Analytics (if configured)</li>
          <li>Crashlytics (if configured)</li>
          <li>Remote Config (if configured)</li>
        </ul>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm mt-4">
{`// Firebase messaging setup
import messaging from '@react-native-firebase/messaging';

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
});`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-4">📐 Responsive Styling</h3>
        <p className="mb-4">
          The app uses a scaling utility for responsive dimensions:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
{`// Using Scale in Styles
import { moderateScale } from '@/styles/scaling';

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

        <h2 className="text-2xl font-bold mt-10 mb-4">Troubleshooting</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Firebase Issues</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-red-600 dark:text-red-400">Error: "No Firebase App '[DEFAULT]' has been created"</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Ensure <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">google-services.json</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">GoogleService-Info.plist</code> are in the project root</li>
              <li>Run <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npx expo prebuild --clean</code> to regenerate native folders</li>
              <li>Check that Firebase plugins are properly configured in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app.json</code></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-red-600 dark:text-red-400">Build errors after adding Firebase</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Clear Metro cache: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npx expo start --clear</code></li>
              <li>Clean prebuild: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npx expo prebuild --clean</code></li>
              <li>For iOS: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">cd ios && pod install</code></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 dark:text-red-400">Push notifications not working</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Verify Firebase project has Cloud Messaging enabled</li>
              <li>Check that the correct bundle identifier/package name is used in Firebase</li>
              <li>For iOS: Ensure APNs certificate is uploaded to Firebase</li>
              <li>Test on physical devices (push notifications don't work on simulators)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-3">Common Prebuild Issues</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-red-600 dark:text-red-400">"expo prebuild" fails</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Delete <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">android/</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">ios/</code> folders</li>
              <li>Run <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npx expo prebuild --clean</code></li>
              <li>Ensure all required config files are present</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Best Practices</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">New Architecture Best Practices</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Component Design</strong>: Build components with New Architecture in mind for optimal performance</li>
          <li><strong>Native Modules</strong>: Use TurboModules-compatible libraries when possible</li>
          <li><strong>Testing</strong>: Test thoroughly on New Architecture to catch compatibility issues early</li>
          <li><strong>Performance Monitoring</strong>: Leverage the improved performance metrics available</li>
          <li><strong>Future-Proofing</strong>: Stay updated with React Native's New Architecture roadmap</li>
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

        <CoreConcept />

        <hr className="my-10 border-t border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default ExpoDocumentationPage; 