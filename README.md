# anthonythomas.com

Personal umbrella site for Anthony Thomas — a LinkedIn-style home page + a Projects hub with preview/detail pages for side projects (Gridiron Analytics, Saveory, etc.).

Built with **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**.

## Features

- **Home** page styled like a lightweight LinkedIn profile
- **Sticky navbar** (Home / Projects + social links)
- **Projects** page with clickable project cards
- **Project detail** pages at `/projects/[slug]` with:
  - preview image
  - tags/status
  - external links (website / iOS / Android)
- Responsive/mobile-friendly layout
- Easy content updates via `src/data/projects.ts` and `src/data/experience.ts`

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion (project card hover animations)

## Project Structure

```text
src/
  app/
    page.tsx                # Home
    projects/
      page.tsx              # Projects list
      [slug]/page.tsx       # Project detail
  components/
    NavBar.tsx
    ProjectsGrid.tsx
    ProjectCard.tsx
    ExperienceSection.tsx
  data/
    projects.ts
    experience.ts
public/
  # images, logos, previews
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

- http://localhost:3000

## Editing Content

### Projects
Update:

- `src/data/projects.ts`

Each project supports fields like:
- `slug`
- `name`
- `description`
- `tags`
- `status`
- `previewImage`
- `logo`
- `externalUrl` / `iosUrl` / `androidUrl`

### Experience
Update:

- `src/data/experience.ts`

Logos should live in `public/` and be referenced like:
- `"/SaveoryLogo.png"`
- `"/logos/accuray.png"`

## Build

```bash
npm run build
npm run start
```

## Deployment

### Recommended: Vercel
1. Push this repo to GitHub
2. Import the repo into Vercel
3. Add custom domain `anthonythomas.com` in Vercel Project Settings → Domains
4. Point DNS records to Vercel (Route 53 / Namecheap / GoDaddy)

After that, every `git push` triggers an automatic deploy.

## License

MIT (optional — change if you want)
