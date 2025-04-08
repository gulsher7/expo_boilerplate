"use client";

import React, { useState } from "react";
import { BookOpen, ChevronDown, FileCog, Menu, Smartphone, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./dropdown-menu";

const COMING_SOON_TECH = [
  "React.js",
  "Next.js",
  "Flutter",
  "Native iOS (SwiftUI)"
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-6 px-8 animate-fade-in glassmorphism sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative">
          <Smartphone className="h-6 w-6 text-primary" />
          <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-amber-400" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NativeCraft</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/documentation" className="text-sm font-medium hover:text-primary transition-colors relative group flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Documentation
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        {/* Coming Soon Dropdown - Desktop */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            Coming Soon <ChevronDown className="h-3 w-3 mt-0.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            <DropdownMenuLabel>Boilerplates Coming Soon</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {COMING_SOON_TECH.map((tech, index) => (
              <DropdownMenuItem key={index} className="cursor-default">
                {tech}
              </DropdownMenuItem>
            ))}
            {/* <DropdownMenuSeparator /> */}
            {/* <div className="px-2 py-2 text-xs text-center text-muted-foreground">
              Tech boilerplates will also be added soon
            </div> */}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors relative group flex items-center gap-2">
          <FileCog className="h-4 w-4" />
          Terms
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>
      
      {/* Mobile Navigation Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-3xl py-8">
          <nav className="flex flex-col items-center gap-6">
            <Link 
              href="/documentation" 
              className="text-base font-medium hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              Documentation
            </Link>
            
            {/* Coming Soon Section - Mobile */}
            <div className="w-full flex flex-col items-center">
              <div className="text-base font-medium mb-2 flex items-center gap-1">
                Coming Soon
              </div>
              <div className="bg-muted/50 rounded-lg p-4 w-full max-w-xs">
                <div className="font-medium mb-2 text-sm">Technologies Coming Soon</div>
                <div className="space-y-2">
                  {COMING_SOON_TECH.map((tech, index) => (
                    <div key={index} className="text-sm px-2 py-1.5">
                      {tech}
                    </div>
                  ))}
                  <div className="text-xs text-center text-muted-foreground pt-2 border-t border-border mt-2">
                    Tech boilerplates will also be added soon
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/terms" 
              className="text-base font-medium hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FileCog className="h-5 w-5" />
              Terms
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
