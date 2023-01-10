const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b7hkhj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
