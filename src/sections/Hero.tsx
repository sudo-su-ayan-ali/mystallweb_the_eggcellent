import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-brand-cream dark:bg-brand-green transition-colors duration-700 pt-32 lg:pt-0"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.08),transparent_70%)]" />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-gold/5 blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="flex-1 text-left z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">Premium Culinary Art</span>
              <div className="h-[1px] w-12 bg-brand-gold/30" />
            </motion.div>
            
            <h1 className="text-[10vw] lg:text-[8rem] font-serif font-black text-brand-green dark:text-brand-cream leading-[0.8] mb-12 tracking-tighter">
              <span className="block overflow-hidden pb-2">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  THE <span className="text-brand-gold italic font-light">ROYAL</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  EGG FEAST
                </motion.span>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-brand-green/70 dark:text-brand-cream/60 font-light max-w-xl mb-16 leading-relaxed"
            >
              Experience the legendary fusion of Surat's street soul and Rajasthan's regal spices. A journey of taste that defines excellence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <button className="px-12 py-6 rounded-2xl bg-brand-green dark:bg-brand-gold text-white dark:text-brand-green font-black tracking-[0.3em] text-[10px] uppercase shadow-2xl hover:-translate-y-1 transition-all duration-500">
                DISCOVER MENU
              </button>
              <button className="px-12 py-6 rounded-2xl border border-black/10 dark:border-white/20 text-brand-green dark:text-brand-cream font-black tracking-[0.3em] text-[10px] uppercase hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                OUR STORY
              </button>
            </motion.div>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-white/20">
              <motion.img 
                style={{ scale: scaleImage }}
                src="/images/Surti Anda Ghotala.png" 
                alt="Signature Surti Anda Ghotala" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Award/Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-12 bg-white/90 dark:bg-brand-green/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl z-20"
              >
                <div className="text-brand-gold font-serif italic text-3xl mb-2">#1</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-green/40 dark:text-brand-cream/40">Most Ordered</div>
              </motion.div>

              {/* Legacy Badge Overlay */}
              <div className="absolute bottom-12 left-12 right-12 bg-brand-gold text-white dark:text-brand-green p-8 rounded-3xl flex items-center justify-between shadow-2xl">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Since 1998</div>
                  <div className="text-xl font-serif font-bold">A Legacy of Taste</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                  →
                </div>
              </div>
            </div>

            {/* Decorative Element Behind Image */}
            <div className="absolute -z-10 -bottom-12 -right-12 w-full h-full border-2 border-brand-gold/20 rounded-[4rem]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;