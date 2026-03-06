import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafId = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      rafId.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const navLinks = [
    { name: 'STRATEGY', href: '#solution' },
    { name: 'SEQUENCE', href: '#workflow' },
    { name: 'ARCHIVE', href: '#case-studies' },
    { name: 'REGISTRY', href: '#network' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-6',
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-background rounded-sm rotate-45" />
            </div>
          </div>

          {/* Desktop Nav Pills */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2.5 rounded-full bg-accent-dark border border-white/5 text-[10px] font-bold tracking-widest text-white/70 hover:bg-white/10 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex rounded-full px-8 bg-white text-background hover:bg-white/90 border-none font-bold text-xs tracking-widest">
            SIGN IN
          </Button>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-dark border border-white/5 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm uppercase tracking-widest text-white/40 hover:text-accent-mint"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 font-mono text-xs uppercase tracking-widest">SIGN IN</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
