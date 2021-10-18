/// <reference types="cypress"/>

describe('RoboApp test suite', () => {
  beforeEach('Connect to page', () => {
    cy.visit('http://localhost:8080/')
  })

  it('When joint moved, should update corresponding coordinates', () => {
    cy.get('textarea').type('move 3 66 77 88')
    cy.get('button').click()

    cy.get('#joint-display > ul > :nth-child(3)').then((joint) => {
      cy.wrap(joint).find(':nth-child(1)').should('have.text', ' x: 66')
      cy.wrap(joint).find(':nth-child(2)').should('have.text', ' y: 77')
      cy.wrap(joint).find(':nth-child(3)').should('have.text', ' z: 88')
    })
  })

  it('When multiple joints moved, should update coordinates', () => {
    cy.get('textarea').type('move 3 66 77 88\nmove 4 11 22 33')
    cy.get('button').click()

    cy.get('#joint-display').then((joints) => {
      cy.wrap(joints)
        .contains('Joint 3')
        .should('have.text', ' Joint 3  x: 66 y: 77 z: 88')
      cy.wrap(joints)
        .contains('Joint 4')
        .should('have.text', ' Joint 4  x: 11 y: 22 z: 33')
    })
  })

  it('When finger closed, should display closed corresponding finger', () => {
    cy.get('textarea').type('close 4')
    cy.get('button').click()

    cy.get('#tool-display > ul > :nth-child(4) > span').should(
      'have.text',
      ' Closed '
    )
  })

  it('When all fingers closed, should display closed fingers', () => {
    cy.get('textarea').type('close all')
    cy.get('button').click()

    cy.get('#tool-display')
      .find('li')
      .each((item) => {
        expect(item).to.contain('Closed')
      })
  })

  it('When all fingers opened, should display opened fingers', () => {
    cy.get('textarea').type('open all')
    cy.get('button').click()

    cy.get('#tool-display')
      .find('li')
      .each((item) => {
        expect(item).to.contain('Open')
      })
  })
})
