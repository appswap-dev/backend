import { X, Check } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "15-30 minutes per bug (4 environments × manual reproduction)",
    "Hours testing time-based features (changing system clock)",
    "20-40 minutes testing timezones (breaking dev environment)",
  ];

  const solutions = [
    "3-5 minutes per bug (80% time saved)",
    "Seconds testing time-based features (10x time multiplier)",
    "90% reduction in timezone testing (no system changes)",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Problem <span className="text-gradient">We Solve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developers and QA teams waste 40-60% of testing time on environment setup, 
            version switching, and manual reproduction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before AppSwap */}
          <div className="relative p-8 rounded-2xl bg-destructive/10 border border-destructive/20 card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-destructive/20 rounded-lg">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground/90">Before AppSwap</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With AppSwap */}
          <div className="relative p-8 rounded-2xl bg-accent/10 border border-accent/30 card-shadow glow-effect">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground/90">With AppSwap</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
