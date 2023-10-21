// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://2c38f5456f8e62f6e151861956cd6275@o4506054884786176.ingest.sentry.io/4506066397233152',

  tracesSampleRate: 1.0,  // Adjust this value in production, or use tracesSampler for greater control
  profilesSampleRate: 1.0, // Profiling sample rate is relative to tracesSampleRate

  debug: false,  // Setting this option to true will print useful information to the console while you're setting up Sentry.
});
