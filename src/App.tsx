import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import SignatureDishes from './sections/SignatureDishes';
import Menu from './sections/Menu';
import About from './sections/About';
import Contact from './sections/Contact';

import { Moon, Sun } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-white dark:bg-brand-green flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-brand-gold text-6xl font-serif font-black mb-8"
      >
        E
      </motion.div>
      <div className="w-48 h-[1px] bg-black/5 dark:bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-brand-gold"
        />
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div ref={container} className="relative w-full min-h-screen bg-white dark:bg-brand-green selection:bg-brand-saffron selection:text-white transition-colors duration-500">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <CustomCursor />
      
      {/* Global Elegant Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif font-black text-brand-green dark:text-brand-cream tracking-tighter"
        >
          EGG<span className="text-brand-gold italic">CELLENT.</span>
        </motion.div>
        
        <nav className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-brand-green/40 dark:text-brand-cream/40">
          {['home', 'dishes', 'menu', 'about', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="hover:text-brand-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-full glass border border-black/5 dark:border-white/10 text-brand-gold hover:scale-110 transition-all"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass px-8 py-3 rounded-full text-[10px] font-black tracking-widest text-brand-gold border border-brand-gold/20 hover:bg-brand-gold hover:text-white transition-all"
          >
            RESERVE
          </motion.button>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <SignatureDishes />
        <Menu />
        <About />
        <Contact />
      </main>

      {/* Global Footer */}
      <footer className="bg-brand-cream dark:bg-black text-brand-green dark:text-brand-cream py-24 px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-4xl font-black mb-8">EGG<span className="text-brand-gold">CELLENT.</span></h3>
            <p className="opacity-60 text-lg font-light max-w-sm leading-relaxed">
              Elevating the humble egg into a culinary masterpiece. Experience the fusion of Rajasthani spice and Gujarat's soul.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-widest text-brand-gold">Location</h4>
            <p className="opacity-60 text-sm font-light leading-loose">
              Near Railway Station,<br />
              Abu Road, Sirohi, Rajasthan<br />
              India
            </p>
          </div>          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-widest text-brand-gold">Connect</h4>
            <div className="flex flex-col gap-4 text-sm font-light opacity-60">
              <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/5 text-center text-[10px] font-black tracking-widest opacity-40 uppercase">
          &copy; 2026 EGGCELLENT RESTAURANT. DESIGNED FOR THE ART OF THE EGG.
        </div>
      </footer>
    </div>
  );
};

export default App;
