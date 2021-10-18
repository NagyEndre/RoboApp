import store from '@/store'
import { Lexer } from './Lexer'
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
        store.commit(MUTATIONS.SET_JOINT_COORDINATES, {
          joint: this.tokens[1],
          x: this.tokens[2],
          y: this.tokens[3],
          z: this.tokens[4],
        })
        break
      }
      case CommandType.Close: {
        const fingers =
          this.tokens[1] === 'all'
            ? [0, 1, 2, 3, 4]
            : [Number(this.tokens[1]) - 1]

        fingers.forEach((fingerIndex) => {
          store.commit(MUTATIONS.CLOSE_FINGER, fingerIndex)
        })
        break
      }
      case CommandType.Open: {
        const fingers =
          this.tokens[1] === 'all'
            ? [0, 1, 2, 3, 4]
            : [Number(this.tokens[1]) - 1]

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
}

enum CommandType {
  Move = 'move',
  Open = 'open',
  Close = 'close',
}
