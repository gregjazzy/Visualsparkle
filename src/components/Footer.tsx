import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-ink-950 overflow-hidden">
      {/* big background brand */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none">
        <div className="text-[18vw] font-display font-bold leading-none tracking-tighter bg-gradient-to-b from-white/[0.05] to-transparent bg-clip-text text-transparent whitespace-nowrap">
          MITTELETTE
        </div>
      </div>

      <div className="relative container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-neon-500 grid place-items-center">
              <span className="font-mono font-bold text-ink-950">G</span>
            </span>
            <span className="font-semibold text-white">
              Gregory Mittelette<span className="text-accent-400">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-md">{t('footer.tagline')}</p>
          <a href="mailto:gregjazzy@gmail.com" className="mt-6 inline-block font-mono text-sm text-accent-400 hover:text-white transition">
            gregjazzy@gmail.com
          </a>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider">{t('footer.navigate')}</h5>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li><Link to="/services" className="hover:text-white">{t('nav.services')}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t('nav.about')}</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">{t('nav.caseStudies')}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t('nav.contact')}</Link></li>
            <li><Link to="/legal" className="hover:text-white">{t('nav.legal')}</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider">{t('footer.servicesCol')}</h5>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>AI Optimization & Prompt Engineering</li>
            <li>Digital Content Development</li>
            <li>Computational Logic Consulting</li>
            <li>Digital Creative Content</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} Gregory Mittelette — Independent Contractor.</p>
          <p className="font-mono">{t('footer.built')}</p>
        </div>
      </div>
    </footer>
  );
}
