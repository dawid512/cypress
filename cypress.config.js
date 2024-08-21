const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
    },
    specPattern: "./cypress/e2e/**/*.spec.ts",
    //specPattern: "./cypress/e2e/**/*.feature", //this is for cucumber
    
    projectId: "iorfvh",
    supportFile: "./cypress/support/e2e.js",
  },
});
