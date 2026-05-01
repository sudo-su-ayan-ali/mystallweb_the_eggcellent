import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["All", "Rajasthan", "Gujarat", "Classic", "Curry"];

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  spice: string;
  type: 'egg' | 'plate' | 'box';
  color: string;
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Anda Pakora", category: "Classic", price: "₹180", spice: "Medium", type: "egg", color: "#F77F00", image: "/images/Anda_Pakora_in_black.png" },
  { id: 2, name: "Surti Anda Ghotala", category: "Gujarat", price: "₹280", spice: "High", type: "plate", color: "#FFB800", image: "/images/Surti Anda Ghotala.png" },
  { id: 3, name: "Egg Keema Paratha", category: "Rajasthan", price: "₹220", spice: "Medium", type: "box", color: "#FF6B35", image: "/images/Egg Keema & Paratha.png" },
  { id: 4, name: "Anda Pulav", category: "Gujarat", price: "₹260", spice: "Low", type: "plate", color: "#D4AF37", image: "/images/anda_pulav.png" },
  { id: 5, name: "Boiled Egg Masala", category: "Rajasthan", price: "₹240", spice: "High", type: "egg", color: "#FF6B35", image: "/images/Boiled Egg Masala.png" },
  { id: 6, name: "Anda Bhurji Pav", category: "Classic", price: "₹150", spice: "Medium", type: "plate", color: "#F77F00", image: "/images/Anda Bhurji Pav.png" },
  { id: 7, name: "Egg Korma", category: "Curry", price: "₹320", spice: "Low", type: "egg", color: "#D4AF37", image: "/images/Egg_Korma.png" },
  { id: 8, name: "Anda Gotala Pav", category: "Gujarat", price: "₹270", spice: "High", type: "plate", color: "#FFB800", image: "/images/Anda Ghotala Pav.png" },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-40 bg-white dark:bg-brand-green transition-colors duration-500">
      <div className="container mx-auto px-8">
        <div className="flex flex-col xl:flex-row justify-between items-end mb-32 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-brand-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6">The Full Menu</h2>
            <h3 className="text-6xl md:text-[7rem] font-serif font-black text-brand-green dark:text-brand-cream leading-[0.9] tracking-tighter break-words">
              CURATED <br /><span className="text-brand-gold italic">FLAVORS</span>
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-4 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 border ${
                  activeCategory === cat 
                    ? "bg-brand-green dark:bg-brand-gold border-brand-green dark:border-brand-gold text-white dark:text-brand-green shadow-[0_20px_40px_-10px_rgba(12,31,26,0.3)]" 
                    : "border-black/5 dark:border-white/5 text-brand-green/40 dark:text-brand-cream/40 hover:border-brand-gold/40 hover:text-brand-green dark:hover:text-brand-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col min-h-[450px] sm:min-h-[500px] rounded-[3rem] overflow-hidden bg-[#F8F8F8] dark:bg-white/5 border border-black/[0.03] dark:border-white/5 hover:border-brand-gold/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
              >
                {/* Image for each Item */}
                <div className="absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-700">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-end flex-grow bg-gradient-to-t from-white dark:from-brand-green via-white/40 dark:via-brand-green/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                      {item.category}
                    </span>
                    <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border ${
                      item.spice === "High" ? "border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400" : 
                      item.spice === "Medium" ? "border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400" : 
                      "border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-400"
                    }`}>
                      {item.spice} Spice
                    </span>
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-brand-green dark:text-brand-cream group-hover:text-brand-gold transition-colors duration-500 mb-6 break-words leading-tight">
                    {item.name}
                  </h4>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-black/5 dark:border-white/5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <span className="text-xl font-serif font-bold text-brand-green dark:text-brand-cream">{item.price}</span>
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold hover:text-brand-green dark:hover:text-white transition-colors">
                      + ADD TO ORDER
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
