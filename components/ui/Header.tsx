import React from "react";
import { Smartphone, Sparkles } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-6 px-8 animate-fade-in glassmorphism sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative">
          <Smartphone className="h-6 w-6 text-primary" />
          <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-amber-400" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NativeCraft</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        {/* <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
          How It Works
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Showcase
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link> */}
        <Link href="/documentation" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Documentation
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors relative group">
          Terms
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
