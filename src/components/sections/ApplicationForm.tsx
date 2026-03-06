import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Send, Cpu } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  brand: z.string().min(2, "Brand name is required"),
  spend: z.string().min(1, "Please select your monthly spend"),
  message: z.string().min(10, "Please tell us a bit about your goals"),
});

type FormData = z.infer<typeof formSchema>;

export default function ApplicationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert("Protocol initialized. We will contact you shortly.");
  };

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto border border-white/5 rounded-[40px] bg-white/[0.01] overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-white/[0.02] border-r border-white/5 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] text-accent-mint uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                  <Cpu className="w-3 h-3" />
                  Onboarding Protocol // v2.4
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
                  Initialize <br />
                  <span className="text-accent-mint">Partnership</span>
                </h3>
                <p className="text-white/40 text-lg leading-relaxed mb-12">
                  We only accept 3 new brands per cycle to maintain our creative output standards. 
                  Complete the initialization sequence to apply.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  System Status: Ready
                </div>
                <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  Encryption: Active
                </div>
              </div>
            </div>

            <div className="p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">User_Name</label>
                    <input 
                      {...register("name")}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-mint transition-colors font-mono text-sm"
                      placeholder="NAME_HERE"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">User_Email</label>
                    <input 
                      {...register("email")}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-mint transition-colors font-mono text-sm"
                      placeholder="EMAIL@HOST.COM"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">Brand_Identity</label>
                  <input 
                    {...register("brand")}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-mint transition-colors font-mono text-sm"
                    placeholder="BRAND_NAME"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">Resource_Allocation</label>
                  <select 
                    {...register("spend")}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-mint transition-colors font-mono text-sm appearance-none"
                  >
                    <option value="" className="bg-background">SELECT_SPEND</option>
                    <option value="5k-20k" className="bg-background">$5K - $20K</option>
                    <option value="20k-100k" className="bg-background">$20K - $100K</option>
                    <option value="100k+" className="bg-background">$100K+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">Mission_Objectives</label>
                  <textarea 
                    {...register("message")}
                    rows={3}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-mint transition-colors font-mono text-sm resize-none"
                    placeholder="DESCRIBE_GOALS..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="premium"
                  className="w-full h-16 text-sm font-mono uppercase tracking-widest group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "PROCESSING..." : (
                    <>
                      Execute Initialization
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
