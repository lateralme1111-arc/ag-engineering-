import { motion } from 'motion/react';
import DisplayCards from '../ui/DisplayCards';
import { Search, PenTool, BarChart3 } from 'lucide-react';

export default function Workflow() {
  const cards = [
    {
      title: "Audit & Strategy",
      description: "Deep-dive into performance history.",
      date: "Phase 1: Analysis",
      icon: <Search className="size-4 text-accent-blue" />,
      iconClassName: "text-accent-blue",
      titleClassName: "text-accent-blue",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Scripting & Edit",
      description: "Psychology-based creative production.",
      date: "Phase 2: Execution",
      icon: <PenTool className="size-4 text-accent-blue" />,
      iconClassName: "text-accent-blue",
      titleClassName: "text-accent-blue",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Launch & Optimize",
      description: "Data-driven iteration at scale.",
      date: "Phase 3: Scaling",
      icon: <BarChart3 className="size-4 text-accent-blue" />,
      iconClassName: "text-accent-blue",
      titleClassName: "text-accent-blue",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section id="workflow" className="py-32 border-y border-white/5">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-left">
            <div className="font-mono text-[10px] text-accent-blue uppercase tracking-[0.3em] mb-6">
              System Sequence // v2.0
            </div>
            <h2 className="text-7xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8] mb-8">
              The <span className="text-accent-blue">Sequence</span>
            </h2>
            <p className="font-sans text-white/40 max-w-md text-lg leading-relaxed">
              Our proprietary workflow designed to turn raw data into high-performance visual assets with surgical precision and speed.
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center py-10 lg:py-0">
            <DisplayCards cards={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}

