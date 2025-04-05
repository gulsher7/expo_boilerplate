"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { downloadApp, getBuildStatus, submitAppBuild } from "@/lib/api";
import { motion } from "framer-motion";
import { Check, Download, Loader, Smartphone, Sparkles, Upload } from "lucide-react";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
// import ProgressBar from "./ProgressBar";
import TipCard from "./TipCard";
import { REACT_NATIVE_TIPS } from "@/constants/tips";
import { appEvents } from "@/config/customEvents";
import { generateCustomId } from "@/lib/utils";




const PLATFORM_OPTIONS = [
  // {
  //   id: "react-native-cli",
  //   name: "React Native CLI",
  //   icon: <Smartphone className="h-5 w-5" />
  // },
  {
    id: "expo",
    name: "React Native Expo",
    icon: <Smartphone className="h-5 w-5" />
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
  const [jobId, setJobId] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Validate form
  // const isFormValid = appName.trim() !== "" && bundleId.trim() !== "" && appIcon !== null;
  const isFormValid = appName.trim() !== "" && bundleId.trim() !== "";

  // Cleanup polling interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async () => {
    if (!isFormValid) {
      toast.error("Please fill in all required fields");
      return;
    }


    const app_id = generateCustomId()
    appEvents({
      eventName: "build_initiated",
      payload: {
        app_id: app_id
      }
    });

    try {
      const formData = { appName, bundleId };
      const response = await submitAppBuild(formData);
      toast.success("App build started");

      setIsGenerating(true);

      // Select three random tips from REACT_NATIVE_TIPS
      const shuffledTips = [...REACT_NATIVE_TIPS].sort(() => 0.5 - Math.random());
      const randomThreeTips = shuffledTips.slice(0, 3);
      setVisibleTips(randomThreeTips);

      intervalRef.current = setInterval(async () => {
        const statusRes = await getBuildStatus(response.jobId);
        if (statusRes.status === "completed") {
          if (intervalRef.current) clearInterval(intervalRef.current);
          toast.success("Build completed!");
          setIsComplete(true);
          setJobId(response.jobId);
          setIsGenerating(false);
          appEvents({
            eventName: "build_succeeded",
            payload: {
              app_id: app_id
            }
          });
        } else if (statusRes.status === "failed") {
          if (intervalRef.current) clearInterval(intervalRef.current);
          toast.error("Build failed");
          setIsGenerating(false);
          appEvents({
            eventName: "build_failed",
            payload: {
              app_id: app_id
            }
          });
        }
      }, 5000);
    } catch (error: any) {
      toast.error(error ? error?.message : "Something went wrong");
      setIsGenerating(false);
      appEvents({
        eventName: "build_failed",
        payload: {
          app_id: app_id
        }
      });
    }
  }, [appName, bundleId, isFormValid]);

  const resetForm = useCallback(() => {
    setAppName("");
    setBundleId("");
    setAppIcon(null);
    setSplashScreen(null);
    setIsGenerating(false);
    setProgress(0);
    setIsComplete(false);
    setVisibleTips([]);
    setTipsIndex(0);
    setJobId("");
  }, []);

  const downloadMyApp = useCallback((jobId: string) => {
    if (jobId) {
      downloadApp(jobId);
      setTimeout(() => {
        resetForm()
      }, 400);
    }
  }, [jobId]);

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

            <div className="space-y-3">
              <Label className="text-base">Select Platform <span className="text-red-500">*</span></Label>
              <div className="grid grid-cols-2 gap-4">
                {PLATFORM_OPTIONS.map((platform) => (
                  <div
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative overflow-hidden ${selectedPlatform === platform.id
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
            </div>

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

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div> */}

            <div className="pt-6">
              {!isGenerating && !isComplete ? (
                <Button
                  className="w-full h-12 text-base font-medium rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all group relative overflow-hidden"
                  disabled={!isFormValid || isGenerating}
                  onClick={handleSubmit}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      onClick={resetForm}
                      className="rounded-xl h-12 border-2 flex items-center justify-center gap-2 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      Create Another App
                    </Button>
                    <Button
                      className="rounded-xl h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 flex items-center justify-center gap-2 w-full"
                      onClick={() => downloadMyApp(jobId)}
                      disabled={!jobId}
                    >
                      <Download className="h-4 w-4" />
                      Download App
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* <ProgressBar progress={progress} /> */}
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
              {/* <p className="text-muted-foreground max-w-md mb-6">
                Fill out the form with your app details, upload your assets, and watch as your React Native app comes to life.
              </p> */}
              <p className="text-muted-foreground max-w-md mb-6">
                Fill out the form with your app details, and watch as your React Native app comes to life.
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
