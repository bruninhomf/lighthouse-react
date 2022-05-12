module.exports = {
    ci: {
      server: {
        psiCollectCron: {
          psiApiKey: process.env.PSI_API_KEY,
          sites: [
            {
              label: 'Production',
              projectSlug: 'the-project',
              schedule: '0 * * * *', // at the top of the hour, every hour
              numberOfRuns: 5,
              urls: ['http://example.com', 'http://example.com/pricing'],
            },
            {
              label: 'Development',
              branch: 'dev',
              projectSlug: 'the-project',
              schedule: '*/10 * * * *', // every 10 minutes
              numberOfRuns: 3,
              urls: ['http://staging.example.com', 'http://staging.example.com/pricing'],
            },
          ],
        },
        storage: {
          storageMethod: 'sql',
          sqlDialect: 'postgres',
          sqlConnectionSsl: true,
          sqlConnectionUrl: process.env.DATABASE_URL,
          sqlDialectOptions: {
            ssl: true,
          },
          sequelizeOptions: {
            pool: {
              acquire: 30000,
            },
          },
        },
      },
    },
  };