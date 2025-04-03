"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Check, Download, Loader, Smartphone, Sparkles, Upload } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import FileUpload from "./FileUpload";
import ProgressBar from "./ProgressBar";
import TipCard from "./TipCard";


const PLATFORM_OPTIONS = [
  {
    id: "react-native-cli",
    name: "React Native CLI",
    icon: <Smartphone className="h-5 w-5" />
  },
  {
    id: "expo",
    name: "React Native Expo",
    icon: <Smartphone className="h-5 w-5" />
  }
];


// React Native tips to display during build
const REACT_NATIVE_TIPS = [
  {
    title: "Use Functional Components",
    description: "Prefer functional components with hooks over class components for better performance and readability."
  },
  {
    title: "Optimize List Rendering",
    description: "Use FlatList or SectionList instead of ScrollView for long lists to optimize performance."
  },
  {
    title: "Handle Device Rotation",
    description: "Use the Dimensions API with event listeners to handle device rotation and screen size changes."
  },
  {
    title: "Avoid Inline Styles",
    description: "Define styles outside of the render method to prevent recreation on each render cycle."
  },
  {
    title: "Use React Navigation",
    description: "For navigation between screens, React Navigation provides a complete solution with deep linking support."
  },
  {
    title: "Implement Proper Error Boundaries",
    description: "Use error boundaries to catch JavaScript errors in components and display fallback UIs."
  },
  {
    title: "Optimize Images",
    description: "Resize images to the appropriate dimensions before displaying them to save memory and improve performance."
  },
  {
    title: "Use Platform-Specific Code",
    description: "Utilize the Platform API to provide different implementations for iOS and Android when necessary."
  }
];

const AppGenerator: React.FC = () => {
  const [appName, setAppName] = useState("");
  const [bundleId, setBundleId] = useState("");
  const [appIcon, setAppIcon] = useState<File | null>(null);
  const [splashScreen, setSplashScreen] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [visibleTips, setVisibleTips] = useState<Array<typeof REACT_NATIVE_TIPS[0]>>([]);
  const [tipsIndex, setTipsIndex] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORM_OPTIONS[0].id);

  // Validate form
  const isFormValid = appName.trim() !== "" && bundleId.trim() !== "" && appIcon !== null;

  // Handle form submission
  const handleGenerateApp = () => {
    if (!isFormValid) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setVisibleTips([REACT_NATIVE_TIPS[0]]);
    setTipsIndex(1);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5;
        
        // Add a new tip every 15% progress approximately
        if (Math.floor(prev / 15) < Math.floor(newProgress / 15) && tipsIndex < REACT_NATIVE_TIPS.length) {
          setVisibleTips(prevTips => [...prevTips, REACT_NATIVE_TIPS[tipsIndex]]);
          setTipsIndex(prevIndex => prevIndex + 1);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          toast.success("App generated successfully!");
          return 100;
        }
        
        return newProgress;
      });
    }, 800);

    return () => clearInterval(interval);
  };

  const resetForm = () => {
    setAppName("");
    setBundleId("");
    setAppIcon(null);
    setSplashScreen(null);
    setIsGenerating(false);
    setProgress(0);
    setIsComplete(false);
    setVisibleTips([]);
    setTipsIndex(0);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Form Section */}
        <motion.div 
          className="glassmorphism rounded-2xl p-8 border-2 border-primary/10 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-accent/5"></div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Create Your React Native App</h2>
          </div>
          
          <div className="space-y-6 relative z-10">

          {/* <div className="space-y-3">
              <Label className="text-base">Select Platform <span className="text-red-500">*</span></Label>
              <div className="grid grid-cols-2 gap-4">
                {PLATFORM_OPTIONS.map((platform) => (
                  <div
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                      selectedPlatform === platform.id 
                        ? "border-primary bg-primary/10 shadow-lg" 
                        : "border-primary/10 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`${selectedPlatform === platform.id ? "text-primary" : "text-muted-foreground"}`}>
                        {platform.icon}
                      </div>
                      <span className="font-medium">{platform.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="app-name" className="text-base">App Name <span className="text-red-500">*</span></Label>
              <Input 
                id="app-name" 
                placeholder="My Awesome App" 
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                disabled={isGenerating}
                className="h-12 rounded-xl border-2 border-primary/10 focus:border-primary/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bundle-id" className="text-base">Bundle ID <span className="text-red-500">*</span></Label>
              <Input 
                id="bundle-id" 
                placeholder="com.mycompany.myapp" 
                value={bundleId}
                onChange={(e) => setBundleId(e.target.value)}
                disabled={isGenerating}
                className="h-12 rounded-xl border-2 border-primary/10 focus:border-primary/20 transition-all"
              />
              <p className="text-xs text-muted-foreground">
                A unique identifier for your app, usually in reverse domain notation.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileUpload 
                label="App Icon (Required)"
                description="PNG, 1024x1024px"
                accept="image/*"
                onChange={setAppIcon}
                className="flex-1"
              />
              
              <FileUpload 
                label="Splash Screen (Optional)"
                description="PNG, 2732x2732px"
                accept="image/*"
                onChange={setSplashScreen}
                className="flex-1"
              />
            </div>
            
            <div className="pt-6">
              {!isGenerating && !isComplete ? (
                <Button 
                  className="w-full h-12 text-base font-medium rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all group relative overflow-hidden"
                  disabled={!isFormValid || isGenerating}
                  onClick={handleGenerateApp}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Build My App
                  </span>
                </Button>
              ) : isComplete ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg py-4">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">App Generated Successfully!</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={resetForm}
                      className="rounded-xl h-12 border-2 flex items-center gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      Create Another App
                    </Button>
                    <Button 
                      className="rounded-xl h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download App
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <ProgressBar progress={progress} />
                  <div className="flex justify-center">
                    <div className="animate-bounce px-4 py-2 rounded-full bg-primary/10 text-primary text-sm flex items-center gap-2">
                      <Loader className="h-4 w-4 animate-spin" />
                      <span>Crafting your app magic...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Tips Section */}
        <motion.div
          className="space-y-8 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isGenerating || isComplete ? (
            <>
              <div className="flex items-center gap-2 mb-6 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-primary/10">
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Loader className="h-5 w-5 animate-spin text-primary" />
                      <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-amber-400" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Building your React Native app...</h2>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Check className="h-5 w-5 text-green-500" />
                      <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-amber-400" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Build Complete!</h2>
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                {visibleTips.map((tip, index) => (
                  <TipCard
                    key={index}
                    title={tip.title}
                    description={tip.description}
                    index={index}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 glassmorphism rounded-2xl border-2 border-primary/10">
              <motion.div 
                className="w-20 h-20 mb-6 relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Smartphone className="w-full h-full text-primary" />
                <Sparkles className="h-6 w-6 absolute -top-2 -right-2 text-amber-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to Build Your App?</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Fill out the form with your app details, upload your assets, and watch as your React Native app comes to life.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Fast", "Easy", "Professional", "Ready-to-use"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AppGenerator;
