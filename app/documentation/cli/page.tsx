import CoreConcept from "@/components/CoreConcept";
import VideoComp from "@/components/ui/VideoComp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NativeCraft - CLI Documentation",
  description: "Documentation for the NativeCraft React Native CLI boilerplate",
};

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const CliDocumentationPage = () => {
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

        <h1 className="text-4xl font-bold mb-8">React Native CLI</h1>

        <div className="flex gap-2 flex-wrap mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native 0.81.1</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React 19.1.0</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Redux 5.0.1</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">React Navigation 7.1.17</span>
        </div>

        {/* GitHub Repository Link */}
        <div className="mb-8">
          <a
            href="https://github.com/gulsher7/rn_boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <GitHubIcon />
            View GitHub Repository
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Project Overview</h2>
        <p>
          A modern, production-ready React Native boilerplate with TypeScript support, focusing on best practices, scalability,
          and developer experience. This boilerplate includes authentication flows, theming support, RTL handling, and a robust
          project structure.
        </p>

        <VideoComp />

        <h2 className="text-2xl font-bold mt-10 mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>🔐 Authentication Flow</strong>: Complete login and OTP verification using react-native-otp-entry</li>
          <li><strong>🌓 Theme Support</strong>: Dynamic light/dark theme switching with context</li>
          <li><strong>🌐 Multi-language Support</strong>: RTL/LTR with i18next integration</li>
          <li><strong>📱 Responsive Design</strong>: Adapts to different screen sizes with proper scaling</li>
          <li><strong>🧩 Modular Architecture</strong>: Clean and maintainable code structure</li>
          <li><strong>🔄 State Management</strong>: Redux Toolkit with proper action handling</li>
          <li><strong>🎨 SVG Support</strong>: Vector graphics with react-native-svg and transformer</li>
          <li><strong>🔒 Secure Storage</strong>: Encrypted storage with rn-secure-storage</li>
          <li><strong>💫 Animations</strong>: Smooth animations with react-native-reanimated v4</li>
          <li><strong>📋 Clipboard Support</strong>: Enhanced clipboard functionality</li>
          <li><strong>🚀 Fast Development</strong>: Hot reloading and developer tools</li>
          <li><strong>🛡️ Type Safety</strong>: Full TypeScript integration</li>
          <li><strong>🎯 Navigation</strong>: React Navigation 7 with bottom tabs and native stack</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Project Architecture</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm mb-8">
          {`.
├── android/                  # Android native code
├── ios/                     # iOS native code
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable UI components
│   ├── config/             # App configuration
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── lang/               # i18n translations
│   ├── models/             # TypeScript interfaces
│   ├── navigation/         # Navigation setup
│   ├── redux/              # State management
│   ├── screens/            # Screen components
│   ├── styles/             # Global styles
│   ├── typings/           # Global TypeScript types
│   └── utils/             # Utility functions
├── patches/                # Patch files for dependencies
├── vendor/                # Vendor files
├── .eslintrc.js           # ESLint configuration
├── .prettierrc.js         # Prettier configuration
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies`}
        </pre>

        <h2 className="text-2xl font-bold mt-10 mb-4">Technology Stack</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Core</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>React Native</strong>: v0.81.1</li>
          <li><strong>React</strong>: v19.1.0</li>
          <li><strong>@react-native/new-app-screen</strong>: v0.81.1</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">State Management {'&'} Data Flow</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Redux</strong>: v5.0.1</li>
          <li><strong>React Redux</strong>: v9.2.0</li>
          <li><strong>Redux Toolkit</strong>: v2.8.2</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Navigation</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>@react-navigation/native</strong>: v7.1.17</li>
          <li><strong>@react-navigation/native-stack</strong>: v7.3.26</li>
          <li><strong>@react-navigation/bottom-tabs</strong>: v7.4.7</li>
          <li><strong>react-native-safe-area-context</strong>: v5.6.1</li>
          <li><strong>react-native-screens</strong>: v4.15.4</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">UI {'&'} Animations</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>react-native-reanimated</strong>: v4.1.0</li>
          <li><strong>react-native-worklets</strong>: v0.5.0</li>
          <li><strong>react-native-svg</strong>: v15.12.1</li>
          <li><strong>react-native-svg-transformer</strong>: v1.5.1</li>
          <li><strong>react-native-modal</strong>: v14.0.0-rc.1</li>
          <li><strong>react-native-bootsplash</strong>: v6.3.10</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Internationalization</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>i18next</strong>: v25.4.2</li>
          <li><strong>react-i18next</strong>: v15.7.3</li>
          <li><strong>intl-pluralrules</strong>: v2.0.1</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Utilities {'&'} Tools</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>axios</strong>: v1.11.0</li>
          <li><strong>react-native-otp-entry</strong>: v1.8.5</li>
          <li><strong>@react-native-clipboard/clipboard</strong>: v1.16.3</li>
          <li><strong>rn-secure-storage</strong>: v3.0.1</li>
          <li><strong>patch-package</strong>: v8.0.0</li>
        </ul>

        <CoreConcept />
      </div>
    </div>
  );
};

export default CliDocumentationPage; 