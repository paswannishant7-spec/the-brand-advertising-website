# The Brand Advertising — Website

Production-ready frontend for The Brand Advertising (TBA), built with React 19, Vite, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

> If `npm install` reports peer dependency conflicts (some libraries are still catching up to React 19), rerun with `npm install --legacy-peer-deps`.

Build for production:

```bash
npm run build
npm run preview
```

## Stack

React 19 · Vite · TypeScript · Tailwind CSS · shadcn/ui primitives (Radix UI) · React Router DOM · Framer Motion · GSAP · Lenis · Lucide React · Swiper.js · React Hook Form + Zod · React Helmet Async

This is a frontend-only project — no backend, CMS, or database. The contact form opens the visitor's email client (`mailto:`) as a working fallback; wire it to a form-handling service or backend endpoint before launch if you need submissions logged.

## Content that still needs the client

Several fields are intentionally left as placeholders and marked in the code and UI:

- Business address, phone, and WhatsApp number (footer, Contact page)
- Social media links
- Company registration details, founding year
- Team size, awards, experience statistics
- Client logos (`src/data/clients.ts`)
- Testimonials (`src/data/clients.ts`)
- Case studies / portfolio photos and results (`src/data/portfolio.ts`)
- Gallery photography (`src/pages/Gallery.tsx`)

Search the codebase for "placeholder" and "to be confirmed" to find every instance.

## Project structure

```
src/
  components/
    layout/    Navbar, Footer, LoadingScreen, BackToTop, ScrollToTop
    ui/        Button, Card, Modal, Carousel, Counter, Reveal, SectionHeading, Container
    sections/  Hero, AboutPreview, ServicesGrid, CampaignTimeline, WhyChooseUsGrid,
               ClientsMarquee, TestimonialsCarousel, FAQAccordion, ContactCTA
  pages/       One file per route (see src/App.tsx for the route table)
  data/        Verified content (services, workflow, principles, FAQ, nav) +
               placeholder content (clients, testimonials, portfolio)
  lib/         Utilities, SEO helper, JSON-LD schema
  hooks/       useLenis (smooth scroll)
```

## Design system

- **Colors** — ink black (#0B0B0C), paper off-white (#F6F4EE), signal yellow (#FFC629, referencing
  the yellow-and-black livery of Indian auto-rickshaws — one of TBA's core formats), route teal (#2F5D62)
- **Type** — Archivo (display, extrabold/black weights) + Inter (body) + JetBrains Mono (data/labels)
- **Signature motif** — a dashed "route line" connecting points, used in the Hero and the Campaign
  Process timeline, echoing the transit routes TBA's vehicle branding travels
