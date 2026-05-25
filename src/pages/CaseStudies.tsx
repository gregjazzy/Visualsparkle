import { useI18n } from '../i18n/LanguageContext';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Tone = 'accent' | 'neon' | 'fuchsia';

const studies = (lang: 'en' | 'fr') => [
  {
    tone: 'accent' as Tone,
    badge: 'AI Optimization',
    title: lang === 'fr'
      ? "Refonte du pipeline IA éditorial d'un studio de média digital européen."
      : 'Editorial AI pipeline rebuild for a European digital media studio.',
    meta: 'Client · Berlin · 8 weeks · 2025',
    challenge: lang === 'fr'
      ? "Une équipe éditoriale de 12 personnes utilisait des prompts ad-hoc et des workflows copier-coller à travers plusieurs fournisseurs LLM. Les outputs étaient incohérents, les coûts imprévisibles, et il n'existait aucun moyen d'évaluer la qualité à l'échelle."
      : 'A 12-person editorial team relied on ad-hoc prompts and copy-paste workflows across multiple LLM providers. Output was inconsistent, costs were unpredictable, and there was no way to evaluate quality at scale.',
    approach: lang === 'fr'
      ? "Construction d'une bibliothèque de prompts versionnée, d'une couche d'abstraction multi-fournisseur (OpenAI / Anthropic) et d'un harnais d'évaluation scorant les outputs face aux guidelines éditoriales."
      : 'Built a versioned prompt library, a provider-agnostic abstraction layer (OpenAI / Anthropic), and an evaluation harness scoring outputs against editorial guidelines.',
    metrics: [
      { v: '−83%', l: lang === 'fr' ? 'Time-to-publish' : 'Time to publish' },
      { v: '+42%', l: lang === 'fr' ? 'Score de cohérence éditoriale' : 'Editorial consistency score' },
      { v: '−37%', l: lang === 'fr' ? 'Coût LLM par article' : 'LLM cost per article' },
    ],
  },
  {
    tone: 'neon' as Tone,
    badge: 'Digital Content Development',
    title: lang === 'fr'
      ? "Logiciel d'apprentissage interactif sur-mesure pour une EdTech nord-américaine."
      : 'Custom interactive learning software for a North-American EdTech.',
    meta: 'Client · Montréal · 14 weeks · 2024',
    challenge: lang === 'fr'
      ? "Le client avait besoin d'un outil interactif propriétaire pour remplacer du contenu tiers fragmenté. Les solutions existantes avaient une analytics pauvre, aucun mode offline et ne pouvaient pas encoder le curriculum structuré conçu par l'équipe."
      : 'The client needed a proprietary interactive tool to replace fragmented third-party content. Existing solutions had poor analytics, no offline mode, and could not encode the structured curriculum the team had developed.',
    approach: lang === 'fr'
      ? "Conception d'un modèle de données structuré pour le curriculum, développement d'une application web interactive React + Python, et intégration d'un pipeline de production de contenu permettant à l'équipe éditoriale de publier de nouveaux exercices en quelques minutes."
      : 'Designed a structured data model for the curriculum, built an interactive web application in React + Python, and integrated a content production pipeline allowing the editorial team to publish new exercises in minutes.',
    metrics: [
      { v: '+61%', l: lang === 'fr' ? 'Rétention apprenants' : 'Learner retention' },
      { v: '12×', l: lang === 'fr' ? 'Vitesse de production de contenu' : 'Content production speed' },
      { v: '100%', l: lang === 'fr' ? 'Code & IP transférés' : 'Code & IP transferred' },
    ],
  },
  {
    tone: 'fuchsia' as Tone,
    badge: 'Computational Logic',
    title: lang === 'fr'
      ? "Audit algorithmique pour une startup d'outils IA APAC."
      : 'Algorithmic audit for an APAC AI tooling startup.',
    meta: 'Client · Singapore · 4 weeks · 2025',
    challenge: lang === 'fr'
      ? "Une équipe produit en croissance était bloquée sur une fonctionnalité de ranking IA produisant des résultats incohérents. Des mois d'ajustements à l'intuition n'avaient pas convergé vers un comportement stable."
      : 'A growing product team was wrestling with an AI ranking feature that produced inconsistent results. Months of intuition-based tweaking had not converged on a stable behaviour.',
    approach: lang === 'fr'
      ? "Reformulation du problème de ranking en énoncé mathématique formel, identification des invariants manquants, livraison d'une implémentation de référence en Python avec suite de benchmarks quantitatifs."
      : 'Reframed the ranking problem as a formal mathematical statement, identified the missing invariants, delivered a reference implementation in Python with a quantitative benchmark suite.',
    metrics: [
      { v: '4 weeks', l: lang === 'fr' ? "De l'audit au fix livré" : 'From audit to shipped fix' },
      { v: '+3.2σ', l: lang === 'fr' ? 'Stabilité des outputs' : 'Output stability' },
      { v: '2', l: lang === 'fr' ? 'Recrutements internes formés' : 'Internal hires upskilled' },
    ],
  },
  {
    tone: 'accent' as Tone,
    badge: 'Digital Creative Content',
    title: lang === 'fr'
      ? 'Pipeline de production multi-format de Digital Creative Content.'
      : 'Multi-format Digital Creative Content production pipeline.',
    meta: 'Client · Paris / Remote · 10 weeks · 2024',
    challenge: lang === 'fr'
      ? 'Un collectif de créateurs indépendants souhaitait industrialiser la production de Digital Creative Content sur vidéo, modules web interactifs et contenus longs sans diluer la qualité éditoriale.'
      : 'An independent creator collective wanted to industrialise the production of Digital Creative Content across video, interactive web modules and long-form written content without diluting editorial quality.',
    approach: lang === 'fr'
      ? "Conception d'un modèle de données de contenu unifié, construction d'un pipeline de production assisté par IA avec quality gates, et connexion aux surfaces de publication de l'équipe."
      : "Designed a unified content data model, built an AI-assisted production pipeline with quality gates, and connected it to the team's publishing surfaces.",
    metrics: [
      { v: '3×', l: lang === 'fr' ? 'Volume produit' : 'Output volume' },
      { v: '−54%', l: lang === 'fr' ? 'Durée de cycle de production' : 'Production cycle time' },
      { v: '9.4/10', l: lang === 'fr' ? 'Score qualité interne' : 'Internal quality score' },
    ],
  },
];

const toneRing: Record<Tone, string> = {
  accent: 'border-accent-500/30 bg-accent-500/10 text-accent-400',
  neon: 'border-neon-500/30 bg-neon-500/10 text-neon-400',
  fuchsia: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300',
};

export function CaseStudies() {
  const { t, lang } = useI18n();
  const data = studies(lang);

  return (
    <>
      <PageHeader kicker={t('cs.kicker')} title={t('cs.title')} subtitle={t('cs.subtitle')} />

      <section className="py-12 lg:py-20">
        <div className="container-x space-y-8">
          {data.map((c, idx) => (
            <Reveal key={idx} delay={0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="card-border rounded-3xl p-8 lg:p-12 grid lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-4 space-y-3">
                  <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wider ${toneRing[c.tone]}`}>
                    {c.badge}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-white leading-tight">{c.title}</h2>
                  <p className="text-sm font-mono text-slate-500">{c.meta}</p>
                </div>
                <div className="lg:col-span-8 space-y-5">
                  <Block label={t('cs.challenge')} text={c.challenge} />
                  <Block label={t('cs.approach')} text={c.approach} />
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{t('cs.outcome')}</h4>
                    <div className="mt-3 grid sm:grid-cols-3 gap-4">
                      {c.metrics.map((m, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: j * 0.1 }}
                          className="rounded-lg bg-white/5 border border-white/10 p-4"
                        >
                          <div className="text-2xl font-display font-bold text-white">{m.v}</div>
                          <div className="text-xs text-slate-400 mt-1">{m.l}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink-900/40 border-t border-white/5">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              {lang === 'fr' ? 'Vous voulez une mission similaire ?' : 'Want a similar engagement?'}
            </h2>
            <MagneticButton
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-neon-500 text-white font-semibold px-7 py-4 shadow-glow"
            >
              {lang === 'fr' ? 'Démarrer une conversation' : 'Start a conversation'}
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{label}</h4>
      <p className="mt-2 text-slate-300 leading-relaxed">{text}</p>
    </div>
  );
}
