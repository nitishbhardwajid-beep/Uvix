# Deployment notes

## Vercel deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Use the default Next.js settings.
4. Ensure the project root is the repository root.
5. Vercel will run `npm run build` automatically.

## Recommended runtime

- Node.js 18.18+ is recommended for local development and build compatibility.

## Notes

- The app uses the Next.js App Router.
- The legacy static HTML version is preserved in the legacy/ folder for reference only.
