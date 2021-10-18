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
    cy.get('#joint-display')
      .contains('Joint 3')
      .should('have.text', ' Joint 3  x: 66 y: 77 z: 88')
  })
  it('When close single finger command executed, should close corresponding finger', () => {
    // Act
    cy.get('textarea').type('close 4')
    cy.get('button').click()

    // Assert
    cy.get('#tool-display')
      .find('li')
      .contains('Finger 4')
      .should('have.text', ' Finger 4  Closed ')
  })
  it('When close all finger command executed, should close all fingers', () => {
    cy.get('textarea').type('close all')
    cy.get('button').click()
  })
})
