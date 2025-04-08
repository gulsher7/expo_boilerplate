import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "NativeCraft - Documentation",
  description: "Complete documentation for the NativeCraft React Native app generator",
};

const DocumentationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">NativeCraft Documentation</h1>
        
        <p className="text-lg mb-12">
          Choose your preferred boilerplate to get started with detailed documentation, setup instructions, and best practices.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* React Native Expo Card */}
          <Link 
            href="/documentation/expo"
            className="no-underline group"
          >
            <div className="p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-all bg-card">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-foreground">
                React Native Expo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </h2>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native 0.76.9</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Expo 52.0.16</span>
              </div>
              <p className="text-muted-foreground">
                A comprehensive boilerplate using Expo for rapid development with pre-configured features like OTA updates and simplified builds.
              </p>
            </div>
          </Link>

          {/* React Native CLI Card */}
          <Link 
            href="/documentation/cli"
            className="no-underline group"
          >
            <div className="p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-all bg-card">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-foreground">
                React Native CLI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </h2>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native 0.78.2</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">React 19.0.0</span>
              </div>
              <p className="text-muted-foreground">
                A bare React Native boilerplate with full native control, custom configurations, and optimized build settings.
              </p>
            </div>
          </Link>

          {/* Coming Soon Cards */}
          {['React.js','Next.js', 'Flutter','Native iOS'].map((tech) => (
            <div key={tech} className="p-6 rounded-xl border-2 border-primary/10 bg-card/50">
              <h2 className="text-2xl font-bold mb-3 text-muted-foreground">{tech}</h2>
              <p className="text-sm text-muted-foreground">Coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage; 