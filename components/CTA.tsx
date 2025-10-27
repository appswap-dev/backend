"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useDownloadUrl } from "@/hooks/use-download-url";

const CTA = () => {
  const downloadUrl = useDownloadUrl();

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
            <a href={downloadUrl}>
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
