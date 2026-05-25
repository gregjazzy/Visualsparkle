import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Layers, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  const faqs = lang === 'fr' ? [
    { q: 'Quel est votre délai de réponse ?', a: 'Moins de 48h en jour ouvré. Une réponse de qualification rapide, puis une proposition écrite sous 5 jours ouvrés si match.' },
    { q: 'Forfait ou taux horaire ?', a: 'Les deux. Forfait pour des livrables bien cadrés. Retainer pour du conseil continu. Pas de facturation horaire sur du travail exploratoire.' },
    { q: 'Quels secteurs servez-vous ?', a: "Médias digitaux, EdTech, startups d'outils IA, studios de contenu et équipes produit construisant des fonctionnalités IA. Industrie-agnostique côté algorithmique et Digital Content Development." },
    { q: 'Signez-vous des NDA ?', a: 'Oui — NDA mutuels en standard dès le call discovery, sur demande.' },
  ] : [
    { q: 'How fast do you reply?', a: 'Under 48 hours on business days. A short qualification reply, then a written proposal within 5 business days if there is a fit.' },
    { q: 'Do you work fixed-price or hourly?', a: 'Both. Fixed-price for well-scoped deliverables. Retainer for ongoing advisory. No hourly billing on exploratory work.' },
    { q: 'Which industries do you serve?', a: 'Digital media, EdTech, AI tooling startups, content studios, and product teams building AI features. Industry-agnostic on the algorithmic and Digital Content Development side.' },
    { q: 'Do you sign NDAs?', a: 'Yes — mutual NDAs are standard from the discovery call onward, on request.' },
  ];

  return (
    <>
      <PageHeader kicker={t('contact.kicker')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <div>
                <h2 className="text-sm font-mono text-accent-400 uppercase tracking-wider">
                  {lang === 'fr' ? 'Contact direct' : 'Direct contact'}
                </h2>
                <ul className="mt-5 space-y-4 text-slate-300">
                  <ContactRow icon={<Mail className="w-4 h-4 text-accent-400" />}>
                    <a href="mailto:gregjazzy@gmail.com" className="font-mono hover:text-white">gregjazzy@gmail.com</a>
                  </ContactRow>
                  <ContactRow icon={<Globe className="w-4 h-4 text-accent-400" />}>
                    {lang === 'fr' ? '100% à distance · Disponible sur tous fuseaux' : 'Fully remote · Available across time zones'}
                  </ContactRow>
                  <ContactRow icon={<Layers className="w-4 h-4 text-accent-400" />}>
                    {lang === 'fr' ? 'Independent Contractor · Missions cadrées par projet' : 'Independent Contractor · Engagements scoped per project'}
                  </ContactRow>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="text-sm font-mono text-accent-400 uppercase tracking-wider">{t('contact.faq')}</h2>
                <div className="mt-5 space-y-5">
                  {faqs.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <h3 className="text-white font-semibold">{f.q}</h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT FORM */}
          <Reveal delay={0.05} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="card-border rounded-2xl p-6 sm:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={t('contact.form.name')}>
                  <input type="text" required placeholder={lang === 'fr' ? 'ex. Jane Doe' : 'e.g. Jane Doe'} className={inputCls} />
                </Field>
                <Field label={t('contact.form.company')}>
                  <input type="text" placeholder={lang === 'fr' ? 'Optionnel' : 'Optional'} className={inputCls} />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email">
                  <input type="email" required placeholder="you@company.com" className={inputCls} />
                </Field>
                <Field label={t('contact.form.budget')}>
                  <select className={inputCls}>
                    <option>&lt; $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $40,000</option>
                    <option>$40,000+</option>
                    <option>{lang === 'fr' ? 'À discuter' : 'To be discussed'}</option>
                  </select>
                </Field>
              </div>
              <Field label={t('contact.form.type')}>
                <select className={inputCls}>
                  <option>AI Optimization & Prompt Engineering</option>
                  <option>Digital Content Development</option>
                  <option>Computational Logic & Algorithm Consulting</option>
                  <option>Digital Creative Content production</option>
                  <option>{lang === 'fr' ? 'Autre / Périmètre sur-mesure' : 'Other / Custom scope'}</option>
                </select>
              </Field>
              <Field label={t('contact.form.brief')}>
                <textarea
                  rows={5}
                  required
                  placeholder={lang === 'fr' ? 'Contexte, objectifs, deadlines, stack actuelle…' : 'Context, objectives, deadlines, current stack…'}
                  className={inputCls}
                />
              </Field>

              <Field label={t('contact.form.recipient')}>
                <input
                  type="text"
                  readOnly
                  value="Gregory Mittelette"
                  className="w-full rounded-lg bg-ink-800 border border-white/10 px-4 py-3 text-white font-mono text-sm"
                />
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-neon-500 text-white font-semibold px-6 py-4 shadow-glow hover:shadow-glow-lg transition"
              >
                {t('contact.form.submit')}
                <ArrowRight className="w-5 h-5" />
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm text-green-300"
                >
                  {t('contact.form.success')}
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  'w-full rounded-lg bg-ink-950 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 transition';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      {children}
    </div>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">{icon}</span>
      <span>{children}</span>
    </li>
  );
}
