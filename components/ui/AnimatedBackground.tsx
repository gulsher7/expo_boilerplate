
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Colorful gradient blobs */}
      <div className="absolute -top-[40%] -left-[20%] h-[80vw] w-[80vw] rounded-full bg-gradient-radial from-purple-300/30 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-[30%] -right-[20%] h-[80vw] w-[80vw] rounded-full bg-gradient-radial from-pink-300/30 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[10%] right-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-radial from-orange-300/20 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-[20%] left-[15%] h-[40vw] w-[40vw] rounded-full bg-gradient-radial from-cyan-300/20 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
