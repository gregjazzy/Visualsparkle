import { ReactNode, useRef, MouseEvent, AnchorHTMLAttributes } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  strength?: number;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export function MagneticButton({ children, to, href, className, strength = 0.35, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">{children}</motion.span>;

  if (to) {
    return (
      <Link
        to={to}
        ref={ref as any}
        className={className}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...rest}
      >
        {content}
      </Link>
    );
  }
  return (
    <a
      href={href}
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {content}
    </a>
  );
}
