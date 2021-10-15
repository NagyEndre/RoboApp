import store from '@/store'
import { Lexer } from './Lexer'

export default class Interpreter {
  private tokens: Array<string>
  constructor(program: string) {
    this.tokens = Lexer.lex(program)
  }
  run() {
    console.log('Running program')
    console.log(this.tokens)

    const commandType = this.tokens[0]
    switch (commandType) {
      case 'move': {
        store.commit('setJointCoordinates', {
          joint: this.tokens[1],
          x: this.tokens[2],
          y: this.tokens[3],
          z: this.tokens[4],
        })
        break
      }
      case 'close': {
        const fingers =
          this.tokens[1] === 'all'
            ? [0, 1, 2, 3, 4]
            : [Number(this.tokens[1]) - 1]

        fingers.forEach((fingerIndex) => {
          store.commit('closeFinger', fingerIndex)
        })
        break
      }
      case 'open': {
        const fingers =
          this.tokens[1] === 'all'
            ? [0, 1, 2, 3, 4]
            : [Number(this.tokens[1]) - 1]

        fingers.forEach((fingerIndex) => {
          store.commit('openFinger', fingerIndex)
        })
        break
      }
      default: {
        throw new Error('Invalid command type')
      }
    }
  }
}
