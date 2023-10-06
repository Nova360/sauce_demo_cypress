import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 900,
    viewportWidth: 1600,
    baseUrl: "https://www.saucedemo.com/",
    env: {
      login_url: "https://www.saucedemo.com/",
    },
  },
});
