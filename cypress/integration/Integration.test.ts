/// <reference types="cypress"/>

describe('RoboApp test suite', () => {
  beforeEach('Connect to page', () => {
    cy.visit('http://localhost:8080/')
  })

  context('Movement', () => {
    it('When joint moved, should update corresponding coordinates', () => {
      executeProgram('move 3 x66 y77 z88')

      cy.get('#joint-display > ul > :nth-child(3)').then((joint) => {
        cy.wrap(joint).find(':nth-child(1)').should('contain', '66')
        cy.wrap(joint).find(':nth-child(2)').should('contain', '77')
        cy.wrap(joint).find(':nth-child(3)').should('contain', '88')
      })
    })

    it('When not all coordinates are changed, should update only relevant entries', () => {
      executeProgram('move 3 z88 y77')

      cy.get('#joint-display > ul > :nth-child(3)').then((joint) => {
        cy.wrap(joint).find(':nth-child(1)').should('contain', '4')
        cy.wrap(joint).find(':nth-child(2)').should('contain', '77')
        cy.wrap(joint).find(':nth-child(3)').should('contain', '88')
      })
    })

    it('When extra whitespace, should appropriately work', () => {
      executeProgram('move     4     y77')

      cy.get(':nth-child(4) > :nth-child(2)').should('contain', '77')
    })

    it('When multiple joints moved, should update coordinates', () => {
      executeProgram('move 3 x66 y77 z88\nmove 4 x11 y22 z33')

      cy.get('#joint-display').then((joints) => {
        cy.wrap(joints)
          .contains('Joint 3')
          .should('have.text', ' Joint 3  X: 66 Y: 77 Z: 88')
        cy.wrap(joints)
          .contains('Joint 4')
          .should('have.text', ' Joint 4  X: 11 Y: 22 Z: 33')
      })
    })
  })

  context('RobotHand', () => {
    it('When finger closed, should display closed corresponding finger', () => {
      executeProgram('close 4')

      cy.get('#tool-display > ul > :nth-child(4) > span').should(
        'have.text',
        ' Closed '
      )
    })

    it('When all fingers closed, should display closed fingers', () => {
      executeProgram('close all')

      cy.get('#tool-display')
        .find('li')
        .each((item) => {
          expect(item).to.contain('Closed')
        })
    })

    it('When all fingers opened, should display opened fingers', () => {
      executeProgram('open all')

      cy.get('#tool-display')
        .find('li')
        .each((item) => {
          expect(item).to.contain('Open')
        })
    })
  })

  context('Robot change', () => {
    it('When different robot selected, should display corresponding tool', () => {
      cy.get('#tool-display > h2').should('have.text', 'Robot hand display')
      cy.get('select').select('Industrial')
      cy.get('#tool-display > h2').should('have.text', 'Gripper display')
      cy.get('select').select('Cobot')
      cy.get('#tool-display > h2').should('have.text', 'Robot hand display')
    })
  })

  context('Gripper', () => {
    beforeEach('Navigate to robot with gripper', () => {
      cy.get('select').select('Industrial')
    })

    it('When closing/opening gripper, should update display', () => {
      executeProgram('close gripper')
      cy.get('p > span').should('have.text', 'Closed')

      executeProgram('open gripper')
      cy.get('p > span').should('have.text', 'Open')
    })
  })
})

function executeProgram(command: string) {
  cy.get('textarea').clear().type(command)
  cy.get('.btn-primary').click()
}
