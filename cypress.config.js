const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern : 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents,
    reporter: 'cypress-mochawesome-reporter',
  },
});
