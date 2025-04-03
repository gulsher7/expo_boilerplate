"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Building your app</span>
        <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-3 overflow-hidden rounded-full [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:via-accent [&>div]:to-secondary [&>div]:transition-all [&>div]:duration-500" 
      />
    </div>
  );
};

export default ProgressBar;
