import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function PageHeader({ kicker, title, subtitle, children }: { kicker: string; title: ReactNode; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <section className="grid-bg pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl leading-[1.05]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
