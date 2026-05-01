import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  origin: string;
  color: string;
  type: 'egg' | 'plate' | 'box';
  price: string;
  desc: string;
  extendedDesc: string;
  ingredients: string[];
  image: string;
}

const DISHES: Dish[] = [
  { 
    id: 1, 
    name: "Surti Anda Ghotala", 
    origin: "Gujarat", 
    color: "#FFB800", 
    type: "plate", 
    price: "₹280", 
    desc: "A chaotic masterpiece of shredded boiled eggs and sunny-side up in a spicy tomato-onion gravy.",
    extendedDesc: "A street food legend from the heart of Surat. This dish combines three different textures of eggs - boiled and shredded, scrambled, and half-fried - all simmered in a robust, buttery gravy rich with garlic and ginger.",
    ingredients: ["Grated Boiled Eggs", "Sunny Side Up Egg", "Butter", "Green Chillies", "Tomato-Onion Base", "House Spices"],
    image: "/images/Surti Anda Ghotala.png"
  },
  { 
    id: 2, 
    name: "Rajasthani Egg Keema", 
    origin: "Rajasthan", 
    color: "#FF6B35", 
    type: "egg", 
    price: "₹320", 
    desc: "Minced eggs slow-cooked with royal spices, mathania chillies, and served with bajra rotlo.",
    extendedDesc: "Experience the royal heat of Rajasthan. Our Egg Keema is slow-cooked for hours with hand-ground spices and the famous Mathania red chillies, giving it a deep smokey flavor that pairs perfectly with traditional Bajra Rotlo.",
    ingredients: ["Minced Eggs", "Mathania Red Chillies", "Ghee", "Whole Spices", "Fried Onions", "Fresh Coriander"],
    image: "/images/Rajasthani Egg Keema & Paratha.png"
  },
  { 
    id: 3, 
    name: "Masala Anda Bhurji", 
    origin: "Classic", 
    color: "#F77F00", 
    type: "plate", 
    price: "₹240", 
    desc: "Fluffy scrambled eggs tossed with fresh coriander, green chillies, and secret house spices.",
    extendedDesc: "The ultimate comfort food, elevated. We use organic free-range eggs, whipped to airy perfection and tossed with finely diced vegetables and a secret blend of sixteen spices that create a symphony of flavors in every bite.",
    ingredients: ["Organic Eggs", "Secret Spice Blend", "Spring Onions", "Capsicum", "Amul Butter", "Ginger-Garlic Paste"],
    image: "/images/Masala Anda Bhurji Pav.png"
  },
  { 
    id: 4, 
    name: "Egg Korma Royal", 
    origin: "Rajasthan", 
    color: "#D4AF37", 
    type: "egg", 
    price: "₹350", 
    desc: "Hard-boiled eggs simmered in a rich, creamy cashew and saffron gravy.",
    extendedDesc: "A dish fit for royalty. Hard-boiled eggs are marinated and then gently simmered in a luscious, velvety gravy made from stone-ground cashews, heavy cream, and premium Kashmiri saffron, garnished with slivered almonds.",
    ingredients: ["Hard Boiled Eggs", "Cashew Paste", "Saffron", "Heavy Cream", "Almonds", "Cardamom"],
    image: "/images/Egg Korma Royal.png"
  },
];

const SignatureDishes: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <section id="dishes" className="py-40 bg-[#FAFAFA] dark:bg-brand-green/95 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-brand-green dark:border-white h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-brand-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6">Chef's Special</h2>
          <h3 className="text-5xl sm:text-6xl md:text-[7rem] font-serif font-black text-brand-green dark:text-brand-cream tracking-tighter leading-[0.9] break-words">
            SIGNATURE <span className="italic text-brand-gold">SELECTION</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col h-full"
            >
              {/* Card Container */}
              <div 
                onClick={() => setSelectedDish(dish)}
                className="group cursor-none bg-white dark:bg-white/5 rounded-[3rem] p-6 sm:p-8 md:p-10 h-full transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-black/[0.03] dark:border-white/5 hover:border-brand-gold/20 flex flex-col"
              >
                
                {/* Image Area */}
                <div className="h-64 sm:h-72 mb-10 relative shrink-0 overflow-hidden rounded-[2rem]">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-4 right-4 bg-brand-green dark:bg-brand-gold text-white dark:text-brand-green px-5 py-2 rounded-full font-serif font-bold text-sm shadow-xl z-10">
                    {dish.price}
                  </div>

                  {/* 3D Indicator */}
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest z-10">
                    3D Model Available
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow min-w-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-8 bg-brand-gold/30" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                      {dish.origin}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-brand-green dark:text-brand-cream mb-4 group-hover:text-brand-gold transition-colors duration-500 break-words leading-tight">
                    {dish.name}
                  </h4>
                  
                  <p className="text-sm text-brand-green/50 dark:text-brand-cream/40 leading-relaxed mb-10 line-clamp-3 break-words">
                    {dish.desc}
                  </p>

                  <div className="mt-auto">
                    <button className="w-full py-5 rounded-2xl bg-brand-green dark:bg-brand-gold text-white dark:text-brand-green text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 hover:bg-brand-gold dark:hover:bg-white hover:shadow-xl group-hover:translate-y-[-4px]">
                      DISCOVER MORE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="absolute inset-0 bg-brand-green/40 dark:bg-black/60 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-7xl bg-white dark:bg-brand-green rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] flex flex-col md:row h-[90vh] md:h-auto max-h-[90vh] border border-white/20"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Column: Image View */}
                <div className="w-full md:w-1/2 h-[35vh] md:h-auto relative bg-[#F8F8F8] dark:bg-white/5 shrink-0 overflow-hidden">
                  <img 
                    src={selectedDish.image} 
                    alt={selectedDish.name}
                    className="w-full h-full object-cover"
                  />
                  
                  <button 
                    onClick={() => setSelectedDish(null)}
                    className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md bg-black/20 px-4 py-2 rounded-full hover:bg-brand-gold transition-colors"
                  >
                    <X size={16} /> Close View
                  </button>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col overflow-y-auto bg-white dark:bg-brand-green">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-gold">
                        {selectedDish.origin}
                      </span>
                      <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/5" />
                    </div>
                    <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-brand-green dark:text-brand-cream mb-6 leading-none break-words">
                      {selectedDish.name}
                    </h3>
                    <div className="text-3xl md:text-4xl font-serif font-medium text-brand-gold/80 italic">
                      {selectedDish.price}
                    </div>
                  </div>

                  <div className="space-y-12 mb-16 min-w-0">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green/30 dark:text-white/30 mb-5">The Narrative</h4>
                      <p className="text-brand-green/60 dark:text-brand-cream/60 leading-relaxed text-lg md:text-xl font-light break-words">
                        {selectedDish.extendedDesc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green/30 dark:text-white/30 mb-6">Master Ingredients</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedDish.ingredients.map((ing, i) => (
                          <span key={i} className="px-6 py-3 rounded-2xl bg-[#F8F8F8] dark:bg-white/5 border border-black/[0.03] dark:border-white/5 text-xs text-brand-green/70 dark:text-brand-cream/70 font-bold uppercase tracking-widest break-all">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-10 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row gap-5">
                    <button className="flex-1 bg-brand-gold text-white dark:text-brand-green py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-brand-green dark:hover:bg-white transition-all duration-500 shadow-2xl shadow-brand-gold/20">
                      ADD TO ORDER
                    </button>
                    <button className="flex-1 py-6 rounded-2xl border border-black/10 dark:border-white/10 text-brand-green dark:text-brand-cream hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500 font-black text-xs tracking-[0.3em] uppercase">
                      CUSTOMIZE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SignatureDishes;
