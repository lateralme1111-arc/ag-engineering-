import { motion } from 'motion/react';
import {
  IconTerminal2,
  IconClock,
  IconTarget,
  IconAlertCircle,
  IconTrendingDown,
  IconEyeOff,
  IconScale,
  IconInfinity
} from "@tabler/icons-react";
import { FeaturesSection } from '../ui/FeaturesSection';

export default function Problem() {
  const problems = [
    {
      title: "Creative Fatigue",
      description: "Ads die in 3 days. Your audience is bored of the same visuals, leading to a death spiral in performance.",
      icon: <IconTrendingDown size={24} />,
    },
    {
      title: "Slow Velocity",
      description: "Waiting weeks for a single video edit while competitors are testing 10 new hooks every single day.",
      icon: <IconClock size={24} />,
    },
    {
      title: "Guesswork Strategy",
      description: "Producing content based on 'vibes' or trends instead of actual performance data and winners.",
      icon: <IconTarget size={24} />,
    },
    {
      title: "Ad Blindness",
      description: "Traditional ads are being ignored by the 'skip' generation. You need native platform content.",
      icon: <IconEyeOff size={24} />,
    },
    {
      title: "Production Bottleneck",
      description: "Scaling is impossible when you're limited by a handful of creative assets that can't be iterated.",
      icon: <IconTerminal2 size={24} />,
    },
    {
      title: "Scaling Friction",
      description: "Every time you double your budget, your creative performance gets cut in half. The ads aren't scaling.",
      icon: <IconScale size={24} />,
    },
    {
      title: "High Complexity",
      description: "Managing 50+ influencers and 100+ creative variations becomes a nightmare without a system.",
      icon: <IconAlertCircle size={24} />,
    },
    {
      title: "Creative Vacuum",
      description: "Running out of fresh ideas results in static brand growth and diminishing returns on your spend.",
      icon: <IconInfinity size={24} />,
    },
  ];

  return (
    <section className="py-24 border-y border-white/5">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] text-accent-peach uppercase tracking-[0.3em] mb-4">
              Diagnostic Report // Critical
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85]">
              The Creative <br />
              <span className="text-white/20">Bottleneck</span>
            </h2>
          </div>
        </div>

        <FeaturesSection features={problems} />
      </div>
    </section>
  );
}

