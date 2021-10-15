/// <reference types="cypress"/>

describe('Test suite', () => {
  beforeEach('Connect to page', () => {
    cy.visit('http://localhost:8080/')
  })
  it('test case', () => {
    cy.get('textarea').type('by tag selector\n')
    cy.get('#program-input').type('by id selector\n')
    //cy.get('.my-class')
    // cy.get('[class="my-class"]')
    cy.get('[name="robot-program"]').type('by attribute-value pair\n')
    cy.get('textarea[name="robot-program"]').type('combined selector')
    //cy.get('[data-cy="asdf"]').type('cypress specific')
  })
})
