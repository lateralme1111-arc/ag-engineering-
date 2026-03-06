import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Globe, Play, ChevronDown, Bell, List, Layout } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
   return (
      <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-32 pb-16">

         {/* Interactive 3D Spline Scene (Background / Center) - Lazy loaded */}
         <div
            className="absolute inset-0 z-0 h-full w-full pointer-events-none cursor-default"
            style={{ willChange: 'transform' }}
         >
            <Suspense fallback={
               <div className="w-full h-full bg-gradient-to-br from-background via-accent-dark to-background animate-pulse" />
            }>
               <div className="w-full h-full pointer-events-auto">
                  <Spline scene="https://prod.spline.design/Zhut-RNTHJoP7UtW/scene.splinecode" />
               </div>
            </Suspense>
         </div>

         {/* Top Logo / Title Layer */}
         <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full text-left px-8 lg:px-16 pointer-events-none mt-4"
         >
            <h1 className="text-[60px] md:text-[110px] lg:text-[150px] font-display font-bold leading-[0.85] tracking-tighter uppercase text-white/95 mix-blend-difference drop-shadow-2xl">
               ADs<br />Engineering
            </h1>
            <div className="flex gap-12 mt-8 justify-start">
               <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">DISAPPEARING</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">FIGURE</div>
               </div>
               <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">NEW ERA, ONLY FOCUSED ON</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">ACHIEVEMENTS.</div>
               </div>
            </div>
         </motion.div>

         {/* Spacer forcing the other contents to top/bottom, leaving center for Spline */}
         <div className="flex-grow z-10 pointer-events-none" />

         {/* Bottom Content / Info & Controls Layer */}
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 container mx-auto px-8 lg:px-16 pointer-events-none mb-4"
         >
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12 pointer-events-auto bg-background/30 backdrop-blur-md p-8 rounded-[40px] border border-white/10 shadow-2xl">
               <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                     <span className="text-xl font-medium text-white/90">The Sunrise Of The Future</span>
                     <div className="flex gap-1">
                        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />)}
                     </div>
                  </div>

                  <div className="flex items-center gap-6 p-2 bg-white/5 rounded-full pr-8">
                     <div className="w-12 h-12 rounded-full bg-accent-peach/20 flex items-center justify-center text-accent-peach font-bold">
                        +15
                     </div>
                     <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 max-w-[120px]">
                        A SONG OF ACHIEVEMENTS IN THE NEW ERA
                     </div>
                  </div>
               </div>

               <div className="flex flex-wrap justify-center gap-4">
                  {[Layout, Bell, Globe].map((Icon, i) => (
                     <div key={i} className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-white/70" />
                     </div>
                  ))}
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-background hover:scale-110 transition-transform cursor-pointer shadow-xl shadow-white/10">
                     <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
               </div>
            </div>
         </motion.div>

         {/* Right Sidebar Rail */}
         <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full z-50">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
               <ChevronDown className="w-5 h-5 text-white/60" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
               <Bell className="w-5 h-5 text-white/60" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
               <List className="w-5 h-5 text-white/60" />
            </div>

            <div className="h-20 w-[1px] bg-white/10 my-4" />

            <div className="vertical-rl rotate-180 font-display text-xl font-bold tracking-tighter text-white/20">
               ADs_ENGINEERING
            </div>

            <div className="flex flex-col gap-3 mt-4">
               {[1, 2].map(i => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-accent-peach p-0.5">
                     <img src={`https://picsum.photos/seed/user${i}/100/100`} className="w-full h-full rounded-full object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                     <div className="absolute -bottom-1 -right-1 bg-accent-peach text-[8px] font-bold px-1 rounded-full text-background">
                        {i * 12}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
