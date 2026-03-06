import { motion } from 'motion/react';
import { Zap, BarChart3, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Solution() {
  const solutions = [
    {
      id: "01",
      icon: Zap,
      title: "High-Velocity Production",
      desc: "Weekly creative sprints delivering 10+ unique hooks and variations for rapid testing.",
      color: "bg-accent-mint"
    },
    {
      id: "02",
      icon: BarChart3,
      title: "Algorithmic Engineering",
      desc: "Creative designed specifically for Meta and TikTok's current distribution models.",
      color: "bg-accent-blue"
    },
    {
      id: "03",
      icon: Users,
      title: "Creator-Led Content",
      desc: "Vetted network of 500+ creators producing authentic, high-retention content.",
      color: "bg-accent-peach"
    },
    {
      id: "04",
      icon: CheckCircle2,
      title: "Performance Analytics",
      desc: "Real-time feedback loops between media buying data and creative production.",
      color: "bg-white/10"
    },
  ];

  return (
    <section id="solution" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="font-mono text-[10px] text-accent-mint uppercase tracking-[0.3em] mb-6">
              Solution Framework // v2.0
            </div>
            <h2 className="text-7xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8] mb-12">
              The Creative <br />
              <span className="text-accent-mint">Engine</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center text-background mb-6 group-hover:scale-110 transition-transform`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-tighter mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[80px] overflow-hidden border border-white/10 relative group">
              <img
                src="https://picsum.photos/seed/tech/1000/1000"
                alt="System Interface"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              <div className="absolute bottom-12 left-12 right-12 p-8 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="font-mono text-[10px] text-accent-mint uppercase tracking-widest mb-2">FEATURED_MODULE</div>
                    <h4 className="text-3xl font-display font-bold uppercase tracking-tighter">Instant Deployment</h4>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center text-background">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our proprietary pipeline allows for creative assets to be scripted, shot, and edited within 48 hours of brief approval.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-blue/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-mint/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
