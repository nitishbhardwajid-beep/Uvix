let Sentry;
try {
  if (process.env.SENTRY_DSN) {
    Sentry = require('@sentry/node');
    Sentry.init({ dsn: process.env.SENTRY_DSN });
  }
} catch (e) {
  // ignore if sentry isn't available
  // eslint-disable-next-line no-console
  console.error('Sentry init failed', e && e.stack ? e.stack : e);
}

module.exports = Sentry;
