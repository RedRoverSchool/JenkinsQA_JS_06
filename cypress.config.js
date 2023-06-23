const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      embeddedScreenshots: true,
      reportFilename: 'mochawesome',
      reportDir: 'cypress/reports/mochawesomeReports'
    },
    mochaJunitReporterReporterOptions: {
     mochaFile: './cypress/reports/junit/test-results-[hash].xml'
    }
  },
});
