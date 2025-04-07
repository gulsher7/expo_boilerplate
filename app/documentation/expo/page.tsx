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

        <VideoComp />

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

        <CoreConcept />

        <hr className="my-10 border-t border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default ExpoDocumentationPage; 