/// <reference types="cypress" />

context('Traversal', () => {
  beforeEach(() => {
    cy.task('log', 'BeforeEach hook is executed from Traversal context')
    cy.visit('https://example.cypress.io/commands/traversal')
  })

  it('.children() - get child DOM elements', () => {
    // https://on.cypress.io/children
    cy.get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Data')
  })
})
