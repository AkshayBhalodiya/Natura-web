This directory includes a minimal Next.js + TypeScript + Tailwind scaffold with a `features` page that demonstrates a responsive two-column layout using ShadCN-like Card components.

How to run locally

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open http://localhost:3000/features

Commit instructions

Include the proof token in your commit message:

```
git add app components styles tailwind.config.js postcss.config.js package.json tsconfig.json README_NEXTJS.md
git commit -m "feat(next): add features page + ShadCN-like cards (RDNC-KT2XA4)"
git push
```

Notes

- This is a minimal scaffold added inside the existing repository for demonstration. If you already have an existing Next.js app, you can copy `app/features/page.tsx` and `components/Card.tsx` into your project and reuse the Tailwind config and globals.
