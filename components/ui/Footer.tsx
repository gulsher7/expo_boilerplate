import { Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 sm:px-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center items-center gap-6 md:gap-0">
        <div className="text-sm text-center md:text-left text-muted-foreground md:mb-0">
          © {new Date().getFullYear()} NativeCraft. All rights reserved.
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href="https://github.com/gulsher7" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span className="md:inline">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/gulsherk/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <Linkedin className="h-4 w-4" />
            <span className="md:inline">LinkedIn</span>
          </Link>
          <Link href="https://x.com/GulsherKhanDev1" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <img height="14" width="14" src="https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo.png" />
            {/* <span className="md:inline">X</span> */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
