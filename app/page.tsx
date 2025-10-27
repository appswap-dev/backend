import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <UseCases />
      <CTA />
    </div>
  );
}
