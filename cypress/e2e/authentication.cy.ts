import auth from "../pages/login.page";

describe("Authentication", () => {
  it("Successful auth in", () => {
    // cy.intercept("/service-worker.js", {
    //   body: undefined,
    // });
    //intercept is used to ensure that the test waits for the page to complete loading
    cy.intercept("/").as("login");
    cy.visit(Cypress.env("login_url"));
    cy.wait("@login");
    cy.get(auth.loginBanner).should("be.visible");
    cy.get(auth.loginBanner).should("contain.text", "Swag Labs");
    auth.login(Cypress.env("STANDARD_USER"), Cypress.env("PASSWORD"));
  });

  it("Successful auth out", () => {
    //auth in
    cy.intercept("/").as("login");
    cy.visit(Cypress.env("login_url"));
    cy.wait("@login");
    cy.get(auth.loginBanner).should("be.visible");
    cy.get(auth.loginBanner).should("contain.text", "Swag Labs");
    auth.login(Cypress.env("STANDARD_USER"), Cypress.env("PASSWORD"));

    //auth out
    auth.logout();
    cy.get(auth.loginBanner).should("be.visible");
    cy.get(auth.loginBanner).should("contain.text", "Swag Labs");
  });
});
