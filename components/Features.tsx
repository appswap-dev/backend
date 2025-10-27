import { GitBranch, Split, Clock, MapPin, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Multi-Version Support",
      description: "Test multiple versions simultaneously - NPM packages, GitHub releases, web proxies, embedded apps, and local dev servers.",
      highlights: ["Production", "Staging", "Feature branches", "Local dev"],
    },
    {
      icon: Split,
      title: "Side-by-Side Split View",
      description: "Compare versions in real-time with synchronized interactions. Click once, test both versions instantly.",
      highlights: ["2-pane layouts", "Action sync", "Smart scroll sync", "Visual indicators"],
    },
    {
      icon: Clock,
      title: "Time Manipulation",
      description: "Test time-sensitive features without waiting. Speed up time 0.1x to 100x and override dates per pane.",
      highlights: ["Date/time override", "Time multiplier", "Animation testing", "No system changes"],
    },
    {
      icon: MapPin,
      title: "Location Emulation",
      description: "Test location-based features instantly with pre-configured locations or custom coordinates.",
      highlights: ["Pre-configured cities", "Custom locations", "One-click switching", "GPS injection"],
    },
    {
      icon: Globe,
      title: "Timezone Testing",
      description: "Test timezone-sensitive features without breaking your environment. Per-pane timezone override with no system changes.",
      highlights: ["Multi-timezone testing", "Date filter testing", "Scheduling features", "No IDE disruption"],
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to test web applications faster and more efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-shadow"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
