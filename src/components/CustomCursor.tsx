import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-brand-gold rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: 'spring', ...springConfig }}
      />
      {/* Decorative Particle Trail */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-gold rounded-full pointer-events-none z-[9997] opacity-30"
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 200 }),
          y: useSpring(mouseY, { damping: 40, stiffness: 200 }),
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
