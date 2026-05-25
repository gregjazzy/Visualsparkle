# Gregory Mittelette — Portfolio

Professional website of **Gregory Mittelette**, Independent Contractor specialising in **AI Implementation**, **Digital Content Development**, and **Computational Logic & Algorithm Consulting**.

Bilingual (EN / FR), built as a single-page React application with smooth animations and parallax effects.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS 3** — utility-first styling, custom theme
- **React Router v6** — multi-page SPA
- **Framer Motion** — animations, parallax, page transitions
- **Lenis** — smooth scrolling
- **Lucide React** — icon set
- Custom **i18n** context (EN / FR, persisted in `localStorage`)

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── App.tsx                  # Router + page transitions
├── main.tsx                 # App entry
├── index.css                # Tailwind + custom styles
├── i18n/
│   ├── LanguageContext.tsx  # EN/FR provider + hook
│   └── translations.ts      # All translation strings
├── components/
│   ├── Navbar.tsx           # Animated top nav with language switch
│   ├── Footer.tsx           # Footer with watermark + links
│   ├── Layout.tsx           # Page shell
│   ├── SmoothScroll.tsx     # Lenis init
│   ├── Cursor.tsx           # Custom blend-difference cursor
│   ├── MagneticButton.tsx   # Mouse-follow CTA
│   ├── Reveal.tsx           # Scroll-triggered fade/slide
│   ├── Counter.tsx          # Animated number counters
│   ├── Marquee.tsx          # Looping logo marquee
│   └── PageHeader.tsx       # Reusable page header
└── pages/
    ├── Home.tsx
    ├── Services.tsx
    ├── About.tsx
    ├── CaseStudies.tsx
    ├── Contact.tsx
    ├── Legal.tsx
    └── NotFound.tsx
```

## Deployment

Recommended: **Vercel** (zero-config for Vite, handles SPA routing automatically).

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy — done

For Netlify, add a `_redirects` file in `public/` with: `/* /index.html 200`.

## License

All rights reserved · © Gregory Mittelette
