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
        break
      }
      case 'open': {
        break
      }
      default: {
        throw new Error('Invalid command type')
      }
    }
    // execute
  }
}
