import store from '@/store'
import { Lexer } from '@/logic/Lexer'
import { MUTATIONS } from '@/store/store.const'

export default class Interpreter {
  private tokens: Array<string>

  constructor(program: string) {
    this.tokens = Lexer.lex(program)
  }
  run() {
    const commandType = this.tokens[0]
    switch (commandType) {
      case CommandType.Move: {
        store.commit(MUTATIONS.SET_JOINT_COORDINATES, this.createJointPayload())
        break
      }
      case CommandType.Close: {
        const fingers = this.getFingerIndexes()

        fingers.forEach((fingerIndex) => {
          store.commit(MUTATIONS.CLOSE_FINGER, fingerIndex)
        })
        break
      }
      case CommandType.Open: {
        const fingers = this.getFingerIndexes()

        fingers.forEach((fingerIndex) => {
          store.commit(MUTATIONS.OPEN_FINGER, fingerIndex)
        })
        break
      }
      default: {
        throw new Error('Invalid command type')
      }
    }
  }

  private createJointPayload() {
    return {
      joint: this.tokens[1],
      x: this.tokens[2],
      y: this.tokens[3],
      z: this.tokens[4],
    }
  }

  private getFingerIndexes(): number[] {
    return this.tokens[1] === CommandType.All
      ? [0, 1, 2, 3, 4]
      : [Number(this.tokens[1]) - 1]
  }
}

enum CommandType {
  Move = 'MOVE',
  Open = 'OPEN',
  Close = 'CLOSE',
  All = 'ALL',
}
