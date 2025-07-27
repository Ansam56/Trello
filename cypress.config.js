const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.{feature,cy.js}",
     baseUrl:"http://trello.com/",
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
   // baseUrl: "https://trello.com",
  },
});
