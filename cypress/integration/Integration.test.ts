/// <reference types="cypress"/>

describe('RoboApp test suite', () => {
  beforeEach('Connect to page', () => {
    cy.visit('http://localhost:8080/')
  })
  it('When single joint move command executed, Should set corresponding joint coordinates', () => {
    // Act
    cy.get('textarea').type('move 3 66 77 88')
    cy.get('button').click()

    // Assert
    //cy.get('#joint-display').find('Joint 3')
  })
  it('When close single finger command executed, should close corresponding finger', () => {
    cy.get('textarea').type('close 4')
    cy.get('button').click()
  })
  it('When close all finger command executed, should close all fingers', () => {
    cy.get('textarea').type('close all')
    cy.get('button').click()
  })
})
