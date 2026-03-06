import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      brand: "Luxe Skin",
      result: "4.8x ROAS",
      desc: "Scaling a premium skincare brand from $10k to $150k/month ad spend.",
      img: "https://picsum.photos/seed/skincare/800/600",
      metrics: ["CTR: 2.4%", "CPC: $0.85", "CVR: 5.2%"],
    },
    {
      brand: "Aura Home",
      result: "320% Growth",
      desc: "Revitalizing a stagnant home decor brand with high-energy video creative.",
      img: "https://picsum.photos/seed/home/800/600",
      metrics: ["CTR: 1.8%", "CPC: $1.20", "CVR: 4.1%"],
    },
  ];

  return (
    <section id="case-studies" className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-8 lg:px-16 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] text-accent-peach uppercase tracking-[0.3em] mb-6">
              Performance Archives // 2024
            </div>
            <h2 className="text-7xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8]">
              The <span className="text-accent-peach">Archives</span>
            </h2>
          </div>
          <button className="font-mono text-[10px] uppercase tracking-widest text-accent-peach border border-accent-peach/20 px-8 py-4 rounded-full hover:bg-accent-peach/5 transition-all mb-4">
            Access Full Database
          </button>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[60px] overflow-hidden">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-background group relative"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={c.img}
                  alt={c.brand}
                  className="w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                  <div>
                    <div className="font-mono text-[10px] text-accent-peach mb-2 uppercase tracking-widest">PROJECT_{c.brand.toUpperCase()}</div>
                    <h4 className="text-5xl font-display font-bold uppercase tracking-tighter">{c.brand}</h4>
                  </div>
                  <div className="text-6xl font-display font-black text-accent-peach">{c.result}</div>
                </div>
              </div>

              <div className="p-12 border-t border-white/5">
                <p className="text-white/50 text-lg mb-12 leading-relaxed max-w-md">
                  {c.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  {c.metrics.map(m => (
                    <div key={m} className="font-mono text-[10px] text-white/30 border border-white/10 px-4 py-2 rounded-full">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
