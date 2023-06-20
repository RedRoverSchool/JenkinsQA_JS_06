const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video: false,
  reporterEnabled: "cypress-mochawesome-reporter, junit",
  mochawesomeReporterOptions: {
    embeddedScreenshots: true,
    reportFilename: 'mochawesome',
    reportDir: 'mochawesomeReports',
  },
  junitReporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
  },
});
