import AppGenerator from "@/components/ui/AppeGenerator";
import { Rocket, Smartphone, Sparkles, Star } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">    
    <div className="flex-1 flex flex-col">      
      <main className="flex-1 container mx-auto py-12 px-4">
        <div 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">The fastest way to create React Native apps</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Create Beautiful React Native Apps
            <span className="block text-gradient">In Minutes, Not Hours</span>
          </h1>
          
          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your app idea into reality with our streamlined generator.
            No coding required, just customize and build.
          </p> */}
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: <Smartphone className="h-5 w-5" />, text: "Cross-Platform" },
              { icon: <Star className="h-5 w-5" />, text: "Professional Design" },
              { icon: <Rocket className="h-5 w-5" />, text: "Instant Deployment" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm"
            
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <AppGenerator />
      </main>
    
    </div>
  </div>
  );
}