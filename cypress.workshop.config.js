const { defineConfig } = require('cypress')
const baseConfig = require('ui-e2e/cypress.config.js');

module.exports = defineConfig({
  extends: './cypress.config.js',
  projectId: "iorfvh",
  key: 'c0e9a606-5fcf-4bee-8762-50d9953c2e34',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./src/plugins/index.js')(on, config)
    },
    testIsolation: false,
    specPattern: "./cypress/e2e/**/*.spec.ts",
    supportFile: "./cypress/support/e2e.js",
  },
})
 