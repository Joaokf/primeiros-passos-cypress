const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720, // <- Faltava a vírgula aqui
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});