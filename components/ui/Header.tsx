
import React from "react";
import { Smartphone, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-6 px-8 animate-fade-in glassmorphism sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Smartphone className="h-6 w-6 text-primary" />
          <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-amber-400" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NativeCraft</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors relative group">
          How It Works
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Showcase
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Documentation
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
