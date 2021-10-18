import store from '@/store'
import { Lexer } from '@/logic/Lexer'
import { MUTATIONS } from '@/store/store.const'

export default class Interpreter {
  private tokens: Array<string>

  constructor(program: string) {
    this.tokens = Lexer.lex(program)
  }
  run() {
    const commandType = this.tokens.shift()
    console.log(this.tokens)
    switch (commandType) {
      case CommandType.Move: {
        const jointIndex = Number(this.tokens.shift())

        const coordinates = this.extractAxesCoordinates()

        store.commit(
          MUTATIONS.SET_JOINT_COORDINATES,
          this.createJointPayload(jointIndex, coordinates.x, coordinates.y, coordinates.z)
        )
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

  private extractAxesCoordinates() {
    let x, y, z

    while (this.tokens.length > 0) {
      const pos = this.tokens.shift()

      switch (pos?.charAt(0)) {
        case Axes.X: {
          x = Number(pos?.substring(1))
          break
        }
        case Axes.Y: {
          y = Number(pos?.substring(1))
          break
        }
        case Axes.Z: {
          z = Number(pos?.substring(1))
          break
        }
        default: {
          throw new Error('Invalid axis specifier')
        }
      }
    }
    return {
      x: x,
      y: y,
      z: z,
    }
  }
  private createJointPayload(
    jointIndex: number | undefined,
    x: number | undefined,
    y: number | undefined,
    z: number | undefined
  ) {
    return {
      joint: jointIndex,
      x: x,
      y: y,
      z: z,
    }
  }

  private getFingerIndexes(): number[] {
    return this.tokens.shift() === CommandType.All
      ? [0, 1, 2, 3, 4]
      : [Number(this.tokens[1]) - 1]
  }
}
enum Axes {
  X = 'X',
  Y = 'Y',
  Z = 'Z',
}
enum CommandType {
  Move = 'MOVE',
  Open = 'OPEN',
  Close = 'CLOSE',
  All = 'ALL',
}
