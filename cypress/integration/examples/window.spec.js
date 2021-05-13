/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.task('log', 'BeforeEach hook is executed from Window context')
    cy.visit("https://example.cypress.io/commands/window");
  });

  it("cy.window() - get the global window object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "top");
  });
});
