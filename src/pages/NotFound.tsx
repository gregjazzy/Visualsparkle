import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/LanguageContext';

export function NotFound() {
  const { lang } = useI18n();
  return (
    <section className="min-h-[80vh] grid place-items-center grid-bg pt-32">
      <div className="text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">// 404</p>
        <h1 className="mt-4 text-5xl lg:text-7xl font-display font-extrabold gradient-text">Page not found</h1>
        <p className="mt-5 text-slate-400 max-w-md mx-auto">
          {lang === 'fr'
            ? "Cette page n'existe pas ou a été déplacée."
            : "This page doesn't exist or has been moved."}
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-white text-ink-950 font-semibold px-6 py-3">
          {lang === 'fr' ? "Retour à l'accueil" : 'Back to home'}
        </Link>
      </div>
    </section>
  );
}
