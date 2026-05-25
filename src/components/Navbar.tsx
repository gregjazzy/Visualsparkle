import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

const links = [
  { to: '/', key: 'nav.home' as const },
  { to: '/services', key: 'nav.services' as const },
  { to: '/about', key: 'nav.about' as const },
  { to: '/case-studies', key: 'nav.caseStudies' as const },
  { to: '/contact', key: 'nav.contact' as const },
];

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20));
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'rgba(11,16,32,0.78)' : 'rgba(11,16,32,0.3)',
          borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
        }}
        transition={{ duration: 0.3 }}
        className="border-b backdrop-blur-xl"
      >
        <nav className="container-x h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.span
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-neon-500 grid place-items-center shadow-glow"
            >
              <span className="font-mono font-bold text-ink-950">G</span>
            </motion.span>
            <span className="font-semibold tracking-tight text-white">
              Gregory Mittelette<span className="text-accent-400">.</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-sm text-slate-300">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-full transition ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{t(l.key)}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-xs font-mono rounded-full border border-white/10 overflow-hidden">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition ${lang === 'en' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-3 py-1.5 transition ${lang === 'fr' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                aria-label="Français"
              >
                FR
              </button>
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-ink-950 text-sm font-semibold px-4 py-2 hover:bg-accent-400 transition"
            >
              {t('nav.cta')}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-white"
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <ul className="container-x py-5 space-y-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link to={l.to} className="block py-2 text-slate-200 hover:text-white">
                      {t(l.key)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
