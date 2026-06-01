import { useI18n } from '../i18n/LanguageContext';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight } from 'lucide-react';

const stack = [
  { tag: 'Language', label: 'TypeScript', sub: 'React · Next.js · Node' },
  { tag: 'Language', label: 'Python', sub: 'FastAPI · Pandas · NumPy' },
  { tag: 'LLM', label: 'OpenAI', sub: 'GPT-4 · GPT-5 · API' },
  { tag: 'LLM', label: 'Anthropic', sub: 'Claude · Tool Use' },
  { tag: 'Web3', label: 'Solidity', sub: 'Smart contracts · EVM' },
  { tag: 'Web3', label: 'viem · wagmi · ethers', sub: 'Typed Web3 clients' },
  { tag: 'Web3', label: 'Foundry · Hardhat', sub: 'Test · Fuzz · Deploy' },
  { tag: 'Web3', label: 'The Graph · Tenderly', sub: 'Indexing · Tracing' },
  { tag: 'Backend', label: 'API Design', sub: 'REST · GraphQL · gRPC' },
  { tag: 'Databases', label: 'Postgres · Redis', sub: 'SQL · pgvector · cache' },
  { tag: 'Infra', label: 'Docker · K8s', sub: 'Serverless · Containers' },
  { tag: 'CI/CD', label: 'GitHub Actions', sub: 'Build · Test · Deploy' },
  { tag: 'Testing', label: 'Vitest · Playwright', sub: 'Unit · Integration · E2E' },
  { tag: 'Observability', label: 'Sentry · OpenTelemetry', sub: 'Logs · Traces · Metrics' },
  { tag: 'Orchestration', label: 'LangChain', sub: 'Agents · Chains · Tools' },
  { tag: 'Frameworks', label: 'Prompt Engineering', sub: 'CoT · ReAct · DSPy' },
  { tag: 'Software', label: 'Custom Tools', sub: 'Interactive web apps' },
  { tag: 'Data', label: 'Data Analytics', sub: 'SQL · Notebooks · Viz' },
  { tag: 'Practice', label: 'Algorithmic Modeling', sub: 'Formal logic · Complexity' },
  { tag: 'Practice', label: 'Digital Creative Content', sub: 'Production pipelines' },
];

export function About() {
  const { t, lang } = useI18n();

  return (
    <>
      <PageHeader kicker={t('about.kicker')} title={t('about.title')}>
        <div className="mt-10 lg:max-w-md card-border rounded-2xl p-6 text-sm font-mono text-slate-300 space-y-2">
          {[
            { k: lang === 'fr' ? 'Rôle' : 'Role', v: 'Independent Contractor' },
            { k: 'Title', v: 'Full-Stack Software Engineer' },
            { k: 'Stack', v: 'TS · Python · React · Node · Solidity' },
            { k: 'Focus', v: 'AI · Digital Content · Web3' },
            { k: lang === 'fr' ? 'Langues' : 'Languages', v: 'EN · FR' },
            { k: 'Mode', v: lang === 'fr' ? '100% à distance' : 'Fully remote' },
          ].map((r) => (
            <div key={r.k} className="flex justify-between">
              <span className="text-slate-500">{r.k}</span>
              <span className="text-white">{r.v}</span>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Bio */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-7 text-slate-300 text-lg leading-relaxed">
          <Reveal><p>{t('about.p1')}</p></Reveal>
          <Reveal delay={0.05}><p>{t('about.p2')}</p></Reveal>
          <Reveal delay={0.1}><p>{t('about.p3')}</p></Reveal>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 bg-ink-900/40 border-y border-white/5">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-neon-400">{t('method.kicker')}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white tracking-tight max-w-2xl">{t('method.title')}</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i, idx) => (
              <Reveal key={i} delay={idx * 0.08}>
                <div className="card-border rounded-2xl p-6 h-full">
                  <span className="text-xs font-mono text-accent-400">0{i}</span>
                  <h4 className="mt-3 text-lg font-display font-semibold text-white">{t(`method.p${i}.title` as any)}</h4>
                  <p className="mt-2 text-sm text-slate-400">{t(`method.p${i}.desc` as any)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-fuchsia-300">// Tech Stack</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white tracking-tight max-w-2xl">{t('stack.title')}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {stack.map((s, i) => (
              <Reveal key={s.label + i} delay={Math.min(i * 0.03, 0.4)}>
                <div className="card-border rounded-xl p-5 h-full hover:-translate-y-0.5 transition">
                  <div className="text-xs font-mono text-slate-500 uppercase">{s.tag}</div>
                  <div className="mt-2 font-semibold text-white">{s.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink-900/40 border-t border-white/5">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              {lang === 'fr' ? 'Envie de travailler ensemble ?' : 'Want to work together?'}
            </h2>
            <MagneticButton
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-neon-500 text-white font-semibold px-7 py-4 shadow-glow"
            >
              {lang === 'fr' ? 'Me contacter' : 'Get in touch'}
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
