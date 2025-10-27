import { Code2, Bug, Zap, Globe2 } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Bug,
      title: "Bug Reproduction",
      description: "Compare bug behavior across production, staging, and feature branches side-by-side. Reproduce issues 80% faster.",
    },
    {
      icon: Zap,
      title: "Animation Testing",
      description: "Watch a 1-minute animation in 6 seconds with 10x time multiplier. Test all timing-sensitive features instantly.",
    },
    {
      icon: Globe2,
      title: "Timezone Scenarios",
      description: "Verify 'Today's Orders' displays correctly across NYC (EST) and Tokyo (JST) simultaneously without breaking your environment.",
    },
    {
      icon: Code2,
      title: "Regression Testing",
      description: "Ensure new features don't break existing functionality by testing multiple versions with synchronized interactions.",
    },
  ];

  return (
    <section id="use-cases" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-World <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how AppSwap transforms everyday testing workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-2 bg-accent/10 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
