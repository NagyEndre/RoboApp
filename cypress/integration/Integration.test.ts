/// <reference types="cypress"/>

describe('RoboApp test suite', () => {
  beforeEach('Connect to page', () => {
    cy.visit('http://localhost:8080/')
  })

  context('Movement', () => {
    it('When joint moved, should update corresponding coordinates', () => {
      executeProgram('move 3 x66 y77 z88')

      assertJointPosition(3, Axis.X, 66)
      assertJointPosition(3, Axis.Y, 77)
      assertJointPosition(3, Axis.Z, 88)
    })

    it('When not all coordinates are changed, should update only relevant entries', () => {
      executeProgram('move 2 z88 y77')

      assertJointPosition(2, Axis.X, 2)
      assertJointPosition(2, Axis.Y, 77)
      assertJointPosition(2, Axis.Z, 88)
    })

    it('When extra whitespace, should appropriately work', () => {
      executeProgram('move     4     y77')

      assertJointPosition(4, Axis.Y, 77)
    })

    it('When multiple joints moved, should update coordinates', () => {
      executeProgram('move 3 x66 y77 z88\nmove 4 x11 y22 z33')

      assertJointPosition(3, Axis.X, 66)
      assertJointPosition(3, Axis.Y, 77)
      assertJointPosition(3, Axis.Z, 88)
      assertJointPosition(4, Axis.X, 11)
      assertJointPosition(4, Axis.Y, 22)
      assertJointPosition(4, Axis.Z, 33)
    })
  })

  context('RobotHand', () => {
    it('When finger closed, should display closed corresponding finger', () => {
      executeProgram('close 4')

      assertFingerState(4, State.Closed)
    })

    it('When all fingers closed, should display closed fingers', () => {
      executeProgram('close all')

      assertAllFingerState(State.Closed)
    })

    it('When all fingers opened, should display opened fingers', () => {
      executeProgram('open all')

      assertAllFingerState(State.Open)
    })
  })

  context('Robot change', () => {
    it('When different robot selected, should display corresponding tool', () => {
      toolDisplayTitleShouldBe('Robot hand display')
      selectRobot('Industrial')
      toolDisplayTitleShouldBe('Gripper display')

      selectRobot('Cobot')
      toolDisplayTitleShouldBe('Robot hand display')
    })
  })

  context('Gripper', () => {
    beforeEach('Navigate to robot with gripper', () => {
      selectRobot('Industrial')
    })

    it('When closing/opening gripper, should update display', () => {
      executeProgram('close gripper')
      assertGripperState(State.Closed)

      executeProgram('open gripper')
      assertGripperState(State.Open)
    })
  })
})

enum Axis {
  X = 2,
  Y,
  Z,
}

enum State {
  Open = 'Open',
  Closed = 'Closed',
}

function selectRobot(name: string) {
  cy.get('select').select(name)
}

function assertGripperState(state: State) {
  cy.get('p > span').should('have.text', state)
}

function toolDisplayTitleShouldBe(title: string) {
  cy.get('#tool-display > h2').should('have.text', title)
}

function executeProgram(command: string) {
  cy.get('textarea').clear().type(command)
  cy.get('.btn-primary').click()
}

function assertJointPosition(jointIndex: number, axis: Axis, value: number) {
  cy.get(`tbody > :nth-child(${jointIndex}) > :nth-child(${axis})`).should(
    'have.text',
    value
  )
}

function assertFingerState(fingerIndex: number, state: State) {
  cy.get(`#tool-display > ul > :nth-child(${fingerIndex}) > span`).should(
    'have.text',
    ` ${state} `
  )
}

function assertAllFingerState(state: State) {
  cy.get('#tool-display')
    .find('li')
    .each((item) => {
      expect(item).to.contain(state)
    })
}
