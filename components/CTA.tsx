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

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-primary/30 card-shadow glow-effect">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Testing?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of developers and QA engineers saving 80% of their testing time with AppSwap.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-7 h-auto" asChild>
            <a href={getDownloadUrl()}>
              <Download className="w-6 h-6" />
              Download AppSwap Now
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Available for macOS, Windows, and Linux • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
