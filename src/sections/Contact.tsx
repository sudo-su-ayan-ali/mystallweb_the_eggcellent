import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 12, stiffness: 120 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.5);
    y.set(distanceY * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white dark:bg-brand-green relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6">Reservations</h2>
              <h3 className="text-5xl md:text-8xl font-serif font-black text-brand-green dark:text-brand-cream mb-12 leading-none tracking-tighter break-words">
                JOIN US AT <br /><span className="text-brand-gold italic">THE TABLE</span>
              </h3>
              <p className="text-xl text-brand-green/60 dark:text-brand-cream/60 mb-16 max-w-lg font-light leading-relaxed break-words">
                Whether it's a quick breakfast or a royal dinner feast, we're ready to serve you the finest egg creations in Rajasthan.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shrink-0">
                    📍
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">Our Location</div>
                    <div className="text-xl font-serif text-brand-green dark:text-brand-cream break-words">Near Railway Station, Abu Road, Sirohi, Rajasthan</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shrink-0">
                    📞
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">Reservation</div>
                    <div className="text-xl font-serif text-brand-green dark:text-brand-cream break-words">+91 98295 15356</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-16 rounded-[4rem] border border-black/5 dark:border-white/5 relative overflow-hidden"
            >
              <form className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-brand-gold">Name</label>
                    <input type="text" className="w-full bg-black/5 dark:bg-white/5 border-none border-b border-black/10 dark:border-white/10 rounded-xl p-5 text-brand-green dark:text-brand-cream focus:ring-1 focus:ring-brand-gold transition-all cursor-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-brand-gold">Guests</label>
                    <select className="w-full bg-black/5 dark:bg-white/5 border-none border-b border-black/10 dark:border-white/10 rounded-xl p-5 text-brand-green dark:text-brand-cream focus:ring-1 focus:ring-brand-gold transition-all appearance-none cursor-none">
                      <option className="bg-white dark:bg-brand-green">2 People</option>
                      <option className="bg-white dark:bg-brand-green">4 People</option>
                      <option className="bg-white dark:bg-brand-green">6+ People</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-brand-gold">Special Request</label>
                  <textarea rows={3} className="w-full bg-black/5 dark:bg-white/5 border-none border-b border-black/10 dark:border-white/10 rounded-xl p-5 text-brand-green dark:text-brand-cream focus:ring-1 focus:ring-brand-gold transition-all cursor-none"></textarea>
                </div>
                
                <div className="pt-6">
                  <MagneticButton className="w-full group relative bg-brand-gold text-white dark:text-brand-green py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase overflow-hidden shadow-2xl shadow-brand-gold/20 transition-all hover:scale-[1.02]">
                    <span className="relative z-10">BOOK A TABLE</span>
                    <div className="absolute inset-0 bg-brand-green dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
