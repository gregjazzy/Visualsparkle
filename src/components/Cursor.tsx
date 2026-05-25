import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function Cursor() {
  const [hidden, setHidden] = useState(false);
  const [pointer, setPointer] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 220, damping: 22, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 220, damping: 22, mass: 0.6 });

  useEffect(() => {
    // Don't render custom cursor on touch devices
    if (window.matchMedia('(hover: none)').matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest('a, button, input, textarea, select, [data-cursor="hover"]');
      setPointer(isInteractive);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    window.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
      window.removeEventListener('mouseenter', enter);
    };
  }, [mouseX, mouseY]);

  if (hidden) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{ x, y }}
      animate={{ scale: pointer ? 2.2 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      <div className="w-8 h-8 rounded-full bg-white" />
    </motion.div>
  );
}
