import { useI18n } from '../i18n/LanguageContext';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function Legal() {
  const { t, lang } = useI18n();

  const sections = lang === 'fr' ? [
    { h: "1. Éditeur du site",
      p: "Le présent site est édité par une personne physique opérant en tant qu'Independent Contractor sous le nom légal indiqué ci-dessous.",
      card: true },
    { h: '2. Nature des prestations',
      p: "L'éditeur fournit des prestations professionnelles en : implémentation et optimisation d'Intelligence Artificielle (AI) ; Digital Content Development ; production de Digital Creative Content ; et conseil en Computational Logic / algorithmique. Toutes les prestations sont délivrées à distance, en tant qu'Independent Contractor, sous contrats de service écrits individuels avec chaque client." },
    { h: '3. Statut Independent Contractor',
      p: "L'éditeur opère strictement en tant qu'Independent Contractor. Aucune mission ne crée de relation employeur-employé, de partenariat, de joint-venture ou de mandat entre l'éditeur et un client. L'éditeur est seul responsable des taxes, assurances, équipements et du temps de travail nécessaires à l'exécution des prestations." },
    { h: '4. Hébergement',
      p: "Ce site est hébergé chez un prestataire d'infrastructure tiers. Les coordonnées de l'hébergeur sont disponibles sur demande." },
    { h: '5. Propriété intellectuelle',
      p: "L'ensemble des contenus de ce site (textes, mise en page, code, identité) est la propriété de l'éditeur ou utilisé avec autorisation. Toute reproduction, distribution ou adaptation sans accord écrit préalable est interdite." },
    { h: '6. Informations & avertissement',
      p: "Les informations présentes sur ce site sont fournies à titre d'information professionnelle uniquement et ne constituent ni une offre ni un engagement contractuel. Les témoignages sont représentatifs de missions passées et peuvent être anonymisés lorsque des accords de confidentialité l'exigent." },
    { h: '7. Données personnelles',
      p: "Les informations transmises via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande. Aucune donnée n'est transférée à des tiers à des fins marketing. Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à l'adresse e-mail ci-dessus." },
    { h: '8. Droit applicable',
      p: "Chaque mission est régie par le droit et la juridiction stipulés dans le contrat de service signé correspondant." },
  ] : [
    { h: '1. Publisher of this website',
      p: 'This website is published by an individual operating as an Independent Contractor under the legal name listed below.',
      card: true },
    { h: '2. Nature of services',
      p: 'The publisher provides professional services in: Artificial Intelligence (AI) implementation and optimization; Digital Content Development; Digital Creative Content production; and Computational Logic / Algorithm consulting. All services are delivered remotely, as an Independent Contractor, under individual written service agreements with each client.' },
    { h: '3. Independent Contractor status',
      p: 'The publisher operates strictly as an Independent Contractor. No engagement creates an employer-employee relationship, partnership, joint venture or agency between the publisher and any client. The publisher is solely responsible for taxes, insurance, equipment and working time required to perform the services.' },
    { h: '4. Hosting',
      p: 'This website is hosted on a third-party infrastructure provider. Hosting provider details are available on request.' },
    { h: '5. Intellectual property',
      p: 'All content on this website (text, layout, code, identity) is the property of the publisher or used with authorisation. Any reproduction, distribution or adaptation without prior written consent is prohibited.' },
    { h: '6. Information & disclaimer',
      p: 'The information on this website is for professional information purposes only and does not constitute a binding offer or commitment. Testimonials are representative of past client engagements and may be anonymised when required by confidentiality agreements.' },
    { h: '7. Personal data',
      p: 'Information submitted through the contact form is used exclusively to respond to your enquiry. No data is transferred to third parties for marketing purposes. You may request access, rectification or deletion of your data by writing to the email above.' },
    { h: '8. Governing law',
      p: 'Each engagement is governed by the law and jurisdiction stipulated in the corresponding signed service agreement.' },
  ];

  return (
    <>
      <PageHeader kicker={t('legal.kicker')} title={t('legal.title')} />

      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10 text-slate-300 leading-relaxed">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <h2 className="text-xl font-display font-semibold text-white">{s.h}</h2>
                <p className="mt-3">{s.p}</p>
                {s.card && (
                  <div className="mt-4 card-border rounded-xl p-5 font-mono text-sm space-y-2">
                    {[
                      { k: lang === 'fr' ? 'Nom légal :' : 'Legal name:', v: 'Gregory Mittelette' },
                      { k: lang === 'fr' ? 'Statut :' : 'Status:', v: 'Independent Contractor' },
                      { k: lang === 'fr' ? 'Adresse professionnelle :' : 'Professional address:', v: '[ FULL PROFESSIONAL ADDRESS ]', accent: true },
                      { k: lang === 'fr' ? "N° d'identification fiscale :" : 'Business / tax identifier:', v: '[ TAX / BUSINESS ID ]', accent: true },
                      { k: 'Email:', v: 'gregjazzy@gmail.com' },
                    ].map((r, k) => (
                      <div key={k}>
                        <span className="text-slate-500">{r.k} </span>
                        <span className={r.accent ? 'text-accent-300' : 'text-white'}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <p className="text-xs text-slate-500 pt-6 border-t border-white/5">
              {lang === 'fr'
                ? 'Dernière mise à jour : 2026. Remplacez les placeholders entre crochets par vos vraies informations légales avant publication.'
                : 'Last updated: 2026. Replace bracketed placeholders with your real legal details before publishing.'}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
