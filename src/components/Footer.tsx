import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent-mint rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">ADs ENGINEERING</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              The premium ad creative agency for high-growth ecommerce brands.
              We turn data into high-performance visuals.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Icon className="w-5 h-5 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Agency</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-accent-mint transition-colors">Services</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent-mint transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent-mint transition-colors">Creators</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent-mint transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/40">hello@ads-engineering.agency</li>
              <li className="text-white/40">Los Angeles, CA</li>
              <li><a href="#apply" className="text-accent-mint font-bold">Apply Now</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">
            © 2026 ADs Engineering Agency. All rights reserved. By Aman Chaudhary
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
