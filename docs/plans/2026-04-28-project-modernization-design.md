# Design Document: Project Modernization & SEO Optimization
**Date**: 2026-04-28
**Topic**: Refactoring Next.js Portfolio to full Vercel capabilities with Markdown content and SEO focus.

## 1. Goal
To transform the current static-exported Next.js portfolio into a premium, maintainable, and high-performance dynamic application ready for Vercel, with a focus on SEO and clean architecture.

## 2. Architecture
- **Framework**: Next.js 15 (App Router).
- **Content Management**: Transition from static TypeScript objects to Markdown files with frontmatter.
- **Rendering Strategy**: Shift from `output: export` to standard Vercel deployment (SSR/ISR).
- **Data Flow**: Use a central library (`lib/content.ts`) to fetch and parse Markdown content using `gray-matter`.

## 3. UI/UX Refinement
- **Navbar**: Move from a floating bottom dock to a fixed top navbar with glassmorphism.
- **Responsiveness**: Ensure the new top navbar is fully functional on mobile with a clean menu.
- **Performance**: Re-enable Next.js Image Optimization and ensure LCP (Largest Contentful Paint) is minimized.
- **Aesthetics**: Maintain the "Fadli Dev Studio" premium feel using HeroUI and custom CSS.

## 4. SEO Strategy
- **Metadata**: Dynamic metadata generation for all pages.
- **Structured Data**: Enhanced JSON-LD for local business and professional profile.
- **Sitemap/Robots**: Automatically updated sitemap.ts and robots.ts.
- **Keywords**: Focus on "Jasa Pembuatan Website UMKM", "Landing Page Konversi Tinggi", and "Next.js Developer Indonesia".

## 5. Cleanup & Maintenance
- **Delete**: Remove `app/smkn3sigi`, `server.js`, `_next/` (build artifacts), and other unused static files.
- **Refactor**: Standardize components to reduce duplication.
- **ESLint**: Update to a cleaner, more maintainable rule set.

## 6. Success Criteria
- 100/100 performance and SEO scores on Lighthouse.
- Fully automated deployment to Vercel.
- Content can be added by simply creating a new Markdown file.
- Mobile view is clean and navigation is intuitive at the top.
