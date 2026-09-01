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
