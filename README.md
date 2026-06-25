# Uvix

Uvix is a Next.js marketing and services website for Uvix Technologies. It uses the App Router and a shared layout system for the homepage and all secondary pages.

## Project structure

- app/ - main Next.js application
  - components/ - reusable UI blocks such as layout, hero canvas, and shared page shells
  - data/ - shared content and page data
  - clients/, contact/, industries/, process/, services/, technologies/ - route pages
  - globals.css - global styling
  - layout.js - root layout and metadata
  - page.js - homepage
- docs/ - deployment and project notes
- legacy/ - archived static HTML version from the original site

## Scripts

- npm install
- npm run dev
- npm run build
- npm run start

## Deployment

This project is ready for deployment on Vercel from a GitHub repository. The app uses the standard Next.js build pipeline and can be deployed directly without extra build configuration.
