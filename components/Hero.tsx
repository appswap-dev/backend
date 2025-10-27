"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const getDownloadUrl = () => {
  if (typeof window === 'undefined') return '#';

  const platform = window.navigator.platform.toLowerCase();
  const userAgent = window.navigator.userAgent.toLowerCase();

  // macOS
  if (platform.includes('mac') || userAgent.includes('mac')) {
    return 'https://github.com/appswap-dev/appswap-releases/releases/latest/download/AppSwap-darwin-arm64-1.0.2.zip';
  }

  // Windows
  if (platform.includes('win') || userAgent.includes('win')) {
    return 'https://github.com/appswap-dev/appswap-releases/releases/latest/download/AppSwap-1.0.2.Setup.exe';
  }

  // Linux - check for specific distros
  if (platform.includes('linux') || userAgent.includes('linux')) {
    // Default to .deb for Debian/Ubuntu-based systems
    return 'https://github.com/appswap-dev/appswap-releases/releases/latest/download/appswap_1.0.2_amd64.deb';
  }

  // Default to deb
  return 'https://github.com/appswap-dev/appswap-releases/releases/latest/download/appswap_1.0.2_amd64.deb';
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20">
          <span className="text-sm text-muted-foreground">The Developer & QA Browser</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">AppSwap</span>
        </h1>

        <p className="text-2xl md:text-3xl text-foreground/90 font-light mb-4 max-w-3xl mx-auto">
          Test Faster. Ship Confidently.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          A specialized browser built for developers and QA engineers to test web applications 
          across multiple versions, environments, and configurations simultaneously.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
            <a href={getDownloadUrl()}>
              <Download className="w-5 h-5" />
              Download AppSwap
            </a>
          </Button>
          {/* <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-primary/30 hover:border-primary/50">
            <Play className="w-5 h-5" />
            Watch Demo
          </Button> */}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-accent mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-accent mb-2">10x</div>
            <div className="text-sm text-muted-foreground">Faster Testing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-accent mb-2">90%</div>
            <div className="text-sm text-muted-foreground">Less Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
