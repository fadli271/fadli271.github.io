# Audit & Modernisasi Portofolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Mentransformasi portofolio statis menjadi aplikasi Next.js 15 dinamis berbasis Markdown yang dioptimalkan untuk Vercel dan SEO.

**Architecture:** Menggunakan Next.js App Router dengan layer konten berbasis Markdown (frontmatter) untuk fleksibilitas manajemen data tanpa mengorbankan performa (menggunakan ISR).

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, Framer Motion, HeroUI, Gray-matter, Lucide-react.

---

### Task 1: Pembersihan Aset & Konfigurasi Dasar
**Files:**
- Modify: `next.config.js`
- Modify: `package.json`
- Delete: `app/smkn3sigi`
- Delete: `server.js`
- Delete: `_next/` (build folder)
- Delete: `public/smkn3/`

**Step 1: Hapus file sampah & folder yang tidak perlu**
Run: `rm -rf app/smkn3sigi server.js _next/ public/smkn3/`

**Step 2: Update `next.config.js` untuk Vercel**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Hapus output: 'export' agar bisa menggunakan Image Optimization & SSR
};

module.exports = nextConfig;
```

**Step 3: Update `package.json` (Nama proyek & cleanup)**
Ganti `"name": "next-app-template"` menjadi `"name": "fadli-dev-studio"`.

**Step 4: Commit**
```bash
git add .
git commit -m "chore: cleanup unused files and update next config for vercel"
```

---

### Task 2: Infrastruktur Konten Markdown
**Files:**
- Create: `lib/markdown.ts`
- Create: `content/projects/jago-compro.md`

**Step 1: Setup Markdown Parser Helper**
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getFileData(folder: string, fileName: string) {
  const fullPath = path.join(contentDirectory, folder, fileName);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}
```

**Step 2: Migrasi satu proyek ke Markdown sebagai test case**
Buat `content/projects/jago-compro.md` dengan metadata dari `app/content/portfolio.ts`.

**Step 3: Commit**
```bash
git add lib/markdown.ts content/
git commit -m "feat: add markdown infrastructure and initial content migration"
```

---

### Task 3: Refactor Navbar ke Posisi Atas (Top Navbar)
**Files:**
- Modify: `components/floating-navbar.tsx`

**Step 1: Ubah CSS positioning & layout**
Ganti `bottom-5` menjadi `top-0` dan sesuaikan lebar menjadi `w-full` dengan *glassmorphism*.

**Step 2: Perbaiki logika visibilitas mobile**
Pastikan menu hamburger muncul di kanan atas dan tidak bertabrakan dengan tombol WhatsApp di bawah.

**Step 3: Commit**
```bash
git add components/floating-navbar.tsx
git commit -m "refactor: move navbar to top with fixed positioning and glassmorphism"
```

---

### Task 4: Optimasi SEO & Metadata Dinamis
**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/sitemap.ts`

**Step 1: Update metadata global & structured data**
Pastikan `canonical` URL menunjuk ke domain utama dan meta tags lengkap (OG, Twitter).

**Step 2: Update sitemap untuk mendukung rute baru**
Pastikan semua rute yang ada terdaftar di `sitemap.ts`.

**Step 3: Commit**
```bash
git add app/layout.tsx app/sitemap.ts
git commit -m "seo: enhance metadata and dynamic sitemap generation"
```

---

### Task 5: Verifikasi & Deployment Ready
**Step 1: Jalankan Linting**
Run: `npm run lint`

**Step 2: Jalankan Build lokal untuk memastikan tidak ada error**
Run: `npm run build`

**Step 3: Final Commit**
```bash
git add .
git commit -m "final: project ready for vercel deployment"
```
