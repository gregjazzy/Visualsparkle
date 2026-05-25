import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Brain, Code2, Sigma, Sparkles, Star } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';
import { Reveal } from '../components/Reveal';
import { Counter } from '../components/Counter';
import { Marquee } from '../components/Marquee';
import { MagneticButton } from '../components/MagneticButton';

export function Home() {
  const { t, lang } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 180]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const blobX1 = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -120]);
  const blobX2 = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 140]);
  const gridScale = useTransform(scrollY, [0, 800], [1, reduce ? 1 : 1.15]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32 min-h-[100vh] flex items-center">
        {/* Parallax grid background */}
        <motion.div style={{ scale: gridScale }} className="absolute inset-0 grid-bg pointer-events-none" />

        {/* Animated blobs */}
        <motion.div
          style={{ x: blobX1 }}
          className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full bg-accent-500/20 blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ x: blobX2 }}
          className="absolute top-20 -right-32 w-[520px] h-[520px] rounded-full bg-neon-500/20 blur-3xl pointer-events-none"
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-slate-300"
          >
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inline-flex w-2 h-2 rounded-full bg-green-400 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
            </span>
            {t('hero.badge')}
          </motion.div>

          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.02] max-w-5xl">
            <AnimatedHeading text={t('hero.title1')} />
            <span className="block mt-2 gradient-text">
              <AnimatedHeading text={t('hero.title2')} delay={0.2} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <MagneticButton
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-neon-500 text-white font-semibold px-7 py-4 shadow-glow hover:shadow-glow-lg transition"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
            </MagneticButton>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 text-white font-medium px-6 py-4 hover:bg-white/10 transition"
            >
              {t('hero.cta.secondary')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl"
          >
            {[
              { k: 'stats.years' as const, n: 10, s: '+' },
              { k: 'stats.workflows' as const, n: 120, s: '+' },
              { k: 'stats.clients' as const, n: 40, s: '+' },
              { k: 'stats.tools' as const, n: 25, s: '+' },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs font-mono uppercase text-slate-400 tracking-wider">{t(s.k)}</dt>
                <dd className="mt-1 text-3xl lg:text-4xl font-display font-bold text-white">
                  <Counter to={s.n} suffix={s.s} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 font-mono text-xs flex flex-col items-center gap-2"
        >
          <span>{lang === 'fr' ? 'défilez' : 'scroll'}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="border-y border-white/5 bg-ink-900/40 py-6">
        <Marquee
          items={[
            'OpenAI · GPT-4 / GPT-5', 'Anthropic · Claude', 'Python', 'LangChain',
            'Vector Databases', 'Data Analytics', 'Custom Interactive Software',
            'Prompt Engineering', 'TypeScript', 'React',
          ]}
        />
      </section>

      {/* ============ SERVICES TEASER ============ */}
      <section className="py-28 lg:py-36 relative">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">{t('services.kicker')}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                  {t('services.title')}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link to="/services" className="text-accent-400 hover:text-white text-sm font-mono inline-flex items-center gap-2 group">
                {t('services.viewAll')}
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Brain className="w-6 h-6 text-accent-400" />}
              tone="accent"
              num="01"
              title={t('service.ai.title')}
              desc={t('service.ai.desc')}
              to="/services#ai"
            />
            <ServiceCard
              icon={<Code2 className="w-6 h-6 text-neon-400" />}
              tone="neon"
              num="02"
              title={t('service.content.title')}
              desc={t('service.content.desc')}
              to="/services#content"
            />
            <ServiceCard
              icon={<Sigma className="w-6 h-6 text-fuchsia-300" />}
              tone="fuchsia"
              num="03"
              title={t('service.logic.title')}
              desc={t('service.logic.desc')}
              to="/services#logic"
            />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-28 lg:py-36 bg-ink-900/40 border-y border-white/5 relative overflow-hidden">
        <div className="container-x relative">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-fuchsia-300">{t('testimonials.kicker')}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                {t('testimonials.title')}
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0.0}><Testimonial quote={t('testi.1')} name="Sarah Kowalski" role="Head of Content · Berlin" initials="SK" gradient="from-accent-500 to-neon-500" /></Reveal>
            <Reveal delay={0.1}><Testimonial quote={t('testi.2')} name="Daniel Aoun" role="Founder · EdTech SaaS, Montréal" initials="DA" gradient="from-neon-500 to-fuchsia-500" /></Reveal>
            <Reveal delay={0.2}><Testimonial quote={t('testi.3')} name="Maya Nakamura" role="Product Lead · Singapore" initials="MN" gradient="from-fuchsia-500 to-accent-500" /></Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="card-border rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
              <div className="relative">
                <Sparkles className="w-8 h-8 text-accent-400 mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                  {t('cta.title')}
                </h2>
                <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">{t('cta.subtitle')}</p>
                <MagneticButton
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-neon-500 text-white font-semibold px-7 py-4 shadow-glow hover:shadow-glow-lg transition"
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// =============================================
// Sub-components
// =============================================

function AnimatedHeading({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function ServiceCard({
  icon, num, title, desc, to, tone,
}: {
  icon: React.ReactNode; num: string; title: string; desc: string; to: string; tone: 'accent' | 'neon' | 'fuchsia';
}) {
  const toneMap = {
    accent: 'from-accent-500/30 to-accent-500/10 border-accent-500/30',
    neon: 'from-neon-500/30 to-neon-500/10 border-neon-500/30',
    fuchsia: 'from-fuchsia-500/30 to-fuchsia-500/10 border-fuchsia-500/30',
  };
  return (
    <Reveal>
      <Link
        to={to}
        className="group card-border rounded-2xl p-8 block h-full transition hover:-translate-y-1"
      >
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${toneMap[tone]} border grid place-items-center transition group-hover:scale-110`}>
            {icon}
          </div>
          <span className="text-xs font-mono text-slate-500">{num}</span>
        </div>
        <h3 className="mt-6 text-xl font-display font-semibold text-white">{title}</h3>
        <p className="mt-3 text-slate-400 leading-relaxed">{desc}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-accent-400 group-hover:text-white transition">
          → read more
        </span>
      </Link>
    </Reveal>
  );
}

function Testimonial({ quote, name, role, initials, gradient }: { quote: string; name: string; role: string; initials: string; gradient: string }) {
  return (
    <figure className="card-border rounded-2xl p-8 flex flex-col h-full">
      <div className="flex items-center gap-0.5 text-accent-400 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <blockquote className="text-slate-200 leading-relaxed flex-1">"{quote}"</blockquote>
      <figcaption className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradient} grid place-items-center text-ink-950 font-bold`}>{initials}</div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-xs text-slate-400">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
