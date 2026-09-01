# Uvix

Uvix is a Next.js marketing and services website for Uvix Technologies. It uses the App Router and a shared layout system for the homepage and all secondary pages.

## Project structure

  - components/ - reusable UI blocks such as layout, hero canvas, and shared page shells
  - data/ - shared content and page data
  - clients/, contact/, industries/, process/, services/, technologies/ - route pages
  - globals.css - global styling
  - layout.js - root layout and metadata
  - page.js - homepage

## Scripts

- `npm run lint` - run Next.js lint
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run send-test-email` - run a local SMTP/SendGrid test script
- `npm run retry-email-failures` - retry persisted failed email deliveries



## Mailer setup (production)

The site includes a mailer scaffold used by the contact API (`app/api/contact/route.js`). It supports either SMTP (via Nodemailer) or SendGrid.

1. Copy `.env.example` to `.env` (or set environment variables in your hosting platform):

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
FROM_EMAIL=team@yourdomain.com
TO_EMAIL=info@uvix.in

# Or for SendGrid
SENDGRID_API_KEY=SG.xxxxx
FROM_EMAIL=team@yourdomain.com
TO_EMAIL=info@uvix.in
```

2. To verify email sending locally, run:

```bash
npm run send-test-email
```

The script will attempt SMTP first if `SMTP_*` vars are present, otherwise it will try SendGrid. No credentials are stored in the repo.

3. You can also test the contact endpoint with `curl`:

```bash
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"you@example.com","message":"Hello from curl"}'
```

If mail sending fails, the API still stores the inquiry in `data/inquiries.json` and returns mail status in the JSON response.

## Deployment

This project is ready for deployment on Vercel from a GitHub repository. The app uses the standard Next.js build pipeline and can be deployed directly without extra build configuration.

## CI / Secrets

The repository includes a GitHub Actions workflow in `.github/workflows/ci.yml` that runs lint, build, Lighthouse CI, and accessibility scans. For full Lighthouse uploads and secure secrets you should add the following repository secrets in GitHub:

- `LHCI_GITHUB_APP_TOKEN` (optional) — for LHCI GitHub app integration
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` — SMTP credentials
- `SENDGRID_API_KEY` — SendGrid API key (if used)
- `FROM_EMAIL`, `TO_EMAIL` — mail envelope addresses
- `RECAPTCHA_SECRET` and `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — reCAPTCHA v3 keys

Do not commit `.env` or any secrets to the repository. Use GitHub repository secrets or your hosting platform's environment management.

