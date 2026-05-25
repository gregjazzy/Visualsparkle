import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Code2, Sigma, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';
import { PageHeader } from '../components/PageHeader';

export function Services() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader
        kicker={t('svc.page.kicker')}
        title={t('svc.page.title')}
        subtitle={t('svc.page.subtitle')}
      />

      <ServiceBlock
        id="ai"
        index="01"
        kicker="AI / Artificial Intelligence"
        tone="accent"
        icon={<Brain className="w-7 h-7" />}
        title={t('service.ai.title')}
        long={t('svc.ai.long')}
        deliverables={[
          lang === 'fr' ? 'Bibliothèque de prompts versionnée' : 'Versioned prompt library',
          lang === 'fr' ? "Harnais d'évaluation avec métriques quantitatives" : 'Evaluation harness with quantitative metrics',
          lang === 'fr' ? 'Scripts de déploiement & hooks de monitoring' : 'Deployment scripts & monitoring hooks',
          lang === 'fr' ? 'Playbook opérationnel & formation' : 'Operational playbook & training',
        ]}
        capabilities={[
          'Multi-step reasoning (CoT, ReAct)',
          'Retrieval-augmented generation (RAG)',
          'Tool-use & function calling',
          'Multi-provider abstraction layers',
        ]}
        engagement={lang === 'fr'
          ? "Périmètres de 4 à 10 semaines : audit, architecture, build, évaluation et activation d'équipe."
          : '4–10 week scopes covering audit, architecture, build, evaluation and team enablement.'}
      />

      <ServiceBlock
        id="content"
        index="02"
        kicker="Digital Content Development"
        tone="neon"
        icon={<Code2 className="w-7 h-7" />}
        title={t('service.content.title')}
        long={t('svc.content.long')}
        bg
        deliverables={[
          lang === 'fr' ? 'Applications web interactives' : 'Interactive web applications',
          lang === 'fr' ? 'Modèles de données curriculaires structurés' : 'Structured curriculum data models',
          lang === 'fr' ? 'Pipelines de production de contenu' : 'Content production pipelines',
          lang === 'fr' ? 'Tableaux de bord analytics & rétention' : 'Analytics & retention dashboards',
        ]}
        capabilities={[
          lang === 'fr' ? 'Front-end (JS, TS, React)' : 'Front-end engineering (JS, TS, React)',
          lang === 'fr' ? 'Architecture de données pour contenus éducatifs' : 'Data architecture for learning content',
          lang === 'fr' ? 'Production de Digital Creative Content' : 'Digital Creative Content production',
          lang === 'fr' ? "UX & design d'interaction" : 'UX & interaction design',
        ]}
        engagement={lang === 'fr'
          ? 'Périmètres de 6 à 16 semaines du discovery au MVP, puis option de retainer pour itérer.'
          : '6–16 week scopes from discovery to MVP, then optional retainer for iteration.'}
      />

      <ServiceBlock
        id="logic"
        index="03"
        kicker="Computational Logic"
        tone="fuchsia"
        icon={<Sigma className="w-7 h-7" />}
        title={t('service.logic.title')}
        long={t('svc.logic.long')}
        deliverables={[
          lang === 'fr' ? 'Audit algorithmique & rapport de complexité' : 'Algorithmic audit & complexity report',
          lang === 'fr' ? 'Spécifications de modèles quantitatifs' : 'Quantitative model specifications',
          lang === 'fr' ? 'Implémentations de référence (Python)' : 'Reference implementations (Python)',
          lang === 'fr' ? "Sessions de coaching d'équipe" : 'Team coaching sessions',
        ]}
        capabilities={[
          lang === 'fr' ? 'Logique formelle pour raisonnement IA' : 'Formal logic for AI reasoning',
          lang === 'fr' ? 'Analyse de complexité & performance' : 'Complexity & performance analysis',
          lang === 'fr' ? 'Modélisation statistique & quantitative' : 'Statistical & quantitative modeling',
          lang === 'fr' ? "Activation d'équipes produit & data" : 'Product & data team enablement',
        ]}
        engagement={lang === 'fr'
          ? "Périmètres focalisés de 2 à 6 semaines, ou retainer fractionnel récurrent (4 à 8h/semaine)."
          : '2–6 week focused scopes, or recurring fractional retainer (4–8h/week).'}
      />

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-ink-900/40 border-y border-white/5">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">{t('process.kicker')}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white tracking-tight max-w-2xl">
              {t('process.title')}
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { n: '01', tk: 'process.s1.title' as const, dk: 'process.s1.desc' as const },
              { n: '02', tk: 'process.s2.title' as const, dk: 'process.s2.desc' as const },
              { n: '03', tk: 'process.s3.title' as const, dk: 'process.s3.desc' as const },
              { n: '04', tk: 'process.s4.title' as const, dk: 'process.s4.desc' as const },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="card-border rounded-2xl p-6 h-full">
                  <span className="text-xs font-mono text-accent-400">STEP {s.n}</span>
                  <h4 className="mt-3 text-lg font-display font-semibold text-white">{t(s.tk)}</h4>
                  <p className="mt-2 text-sm text-slate-400">{t(s.dk)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              {lang === 'fr' ? 'Vous avez un périmètre en tête ?' : 'Have a scope in mind?'}
            </h2>
            <MagneticButton
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-neon-500 text-white font-semibold px-7 py-4 shadow-glow"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// ===============================
function ServiceBlock({
  id, index, kicker, title, long, deliverables, capabilities, engagement, tone, icon, bg = false,
}: {
  id: string; index: string; kicker: string; title: string; long: string;
  deliverables: string[]; capabilities: string[]; engagement: string;
  tone: 'accent' | 'neon' | 'fuchsia'; icon: React.ReactNode; bg?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const toneMap = {
    accent: { ring: 'border-accent-500/30 bg-accent-500/10 text-accent-400', dot: 'text-accent-400' },
    neon: { ring: 'border-neon-500/30 bg-neon-500/10 text-neon-400', dot: 'text-neon-400' },
    fuchsia: { ring: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300', dot: 'text-fuchsia-300' },
  };
  const { t } = useI18n();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 lg:py-32 scroll-mt-24 ${bg ? 'bg-ink-900/40 border-y border-white/5' : ''}`}
    >
      <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
        <motion.div style={{ y }} className="lg:col-span-5 lg:sticky lg:top-28">
          <div className={`inline-flex items-center gap-3 rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wider ${toneMap[tone].ring}`}>
            {index} — {kicker}
          </div>
          <div className={`mt-6 inline-grid place-items-center w-14 h-14 rounded-xl border ${toneMap[tone].ring}`}>
            {icon}
          </div>
          <h2 className="mt-6 text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">{title}</h2>
          <p className="mt-5 text-slate-400 leading-relaxed text-lg">{long}</p>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          <Reveal>
            <div className="card-border rounded-2xl p-6 h-full">
              <h4 className="text-white font-semibold">{t('svc.deliverables')}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-2">
                    <ChevronRight className={`w-4 h-4 mt-0.5 ${toneMap[tone].dot}`} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-border rounded-2xl p-6 h-full">
              <h4 className="text-white font-semibold">{t('svc.capabilities')}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {capabilities.map((c) => (
                  <li key={c} className="flex gap-2">
                    <ChevronRight className={`w-4 h-4 mt-0.5 ${toneMap[tone].dot}`} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card-border rounded-2xl p-6 sm:col-span-2">
              <h4 className="text-white font-semibold">{t('svc.engagement')}</h4>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{engagement}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
