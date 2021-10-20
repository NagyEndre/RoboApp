/// <reference types="cypress"/>

describe('RoboApp test suite', () => {
  beforeEach('Connect to page', () => {
    cy.visit('http://localhost:8080/')
  })

  context('Movement', () => {
    it('When joint moved, should update corresponding coordinates', () => {
      cy.get('textarea').type('move 3 x66 y77 z88')
      cy.get('button').click()

      cy.get('#joint-display > ul > :nth-child(3)').then((joint) => {
        cy.wrap(joint).find(':nth-child(1)').should('contain', '66')
        cy.wrap(joint).find(':nth-child(2)').should('contain', '77')
        cy.wrap(joint).find(':nth-child(3)').should('contain', '88')
      })
    })

    it('When not all coordinates are changed, should update only relevant entries', () => {
      cy.get('textarea').type('move 3 z88 y77')
      cy.get('button').click()

      cy.get('#joint-display > ul > :nth-child(3)').then((joint) => {
        cy.wrap(joint).find(':nth-child(1)').should('contain', '4')
        cy.wrap(joint).find(':nth-child(2)').should('contain', '77')
        cy.wrap(joint).find(':nth-child(3)').should('contain', '88')
      })
    })

    it('When extra whitespace, should appropriately work', () => {
      cy.get('textarea').type('move     4     y77')
      cy.get('button').click()

      cy.get(':nth-child(4) > :nth-child(2)').should('contain', '77')
    })
  })

  context('Tool', () => {
    it('When multiple joints moved, should update coordinates', () => {
      cy.get('textarea').type('move 3 x66 y77 z88\nmove 4 x11 y22 z33')
      cy.get('button').click()

      cy.get('#joint-display').then((joints) => {
        cy.wrap(joints)
          .contains('Joint 3')
          .should('have.text', ' Joint 3  X: 66 Y: 77 Z: 88')
        cy.wrap(joints)
          .contains('Joint 4')
          .should('have.text', ' Joint 4  X: 11 Y: 22 Z: 33')
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
})
