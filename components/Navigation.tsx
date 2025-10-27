"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useDownloadUrl } from "@/hooks/use-download-url";

const Navigation = () => {
  const downloadUrl = useDownloadUrl();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
          <span className="text-xl font-bold text-gradient">AppSwap</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Use Cases
          </a>
          <a href="https://docs.appswap.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </div>

        <Button variant="hero" size="sm" asChild>
          <a href={downloadUrl}>
            <Download className="w-4 h-4" />
            Download
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
