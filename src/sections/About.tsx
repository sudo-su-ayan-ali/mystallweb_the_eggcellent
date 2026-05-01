import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-white dark:bg-brand-green text-brand-green dark:text-brand-cream relative overflow-hidden transition-colors duration-500">
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-brand-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6">Our Heritage</h2>
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black leading-[0.9] tracking-tighter text-brand-green dark:text-brand-cream break-words">
                WHERE <span className="text-brand-gold italic">TRADITION</span> <br />MEETS THE ART.
              </h3>
            </div>

            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-brand-green/70 dark:text-brand-cream/70 break-words">
              <p>
                Eggcellent was born from a simple obsession: the perfection of the egg. We believe that this humble ingredient, when treated with royal Rajasthani spices and the soulful techniques of Gujarat, becomes a culinary masterpiece.
              </p>
              <p>
                From the bustling streets of Surat to the regal kitchens of Udaipur, our recipes have been curated over decades, bringing you a fusion that is both nostalgic and revolutionary.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-10 border-t border-black/5 dark:border-white/5">
              <div>
                <div className="text-3xl md:text-4xl font-serif font-black text-brand-gold mb-2">120+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 dark:text-brand-cream/40">Egg Variations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-black text-brand-gold mb-2">15</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 dark:text-brand-cream/40">Signature Spices</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-black text-brand-gold mb-2">1998</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 dark:text-brand-cream/40">Est. Heritage</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden bg-[#F8F8F8] dark:bg-white/5 relative border border-black/5 dark:border-white/5 shadow-2xl">
              <img 
                src="/images/Surti Anda Ghotala.png" 
                alt="Chef preparing eggs" 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-brand-gold/5 dark:bg-brand-gold/5" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 sm:-bottom-12 sm:-left-12 w-40 h-40 sm:w-48 sm:h-48 bg-brand-gold rounded-full flex items-center justify-center p-6 text-center shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)]"
            >
              <span className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight">
                Authentic Flavors Since 1998
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] dark:opacity-[0.01] select-none pointer-events-none hidden lg:block overflow-hidden">
        <div className="text-[30rem] font-serif font-black text-brand-green dark:text-brand-cream whitespace-nowrap">
          STORY
        </div>
      </div>
    </section>
  );
};

export default About;
