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
    switch (commandType) {
      case CommandType.Move: {
        const jointIndex = Number(this.tokens.shift())

        const coordinates = this.extractAxisCoordinates()

        store.commit(
          MUTATIONS.SET_JOINT_COORDINATES,
          this.createJointPayload(
            jointIndex,
            coordinates.x,
            coordinates.y,
            coordinates.z
          )
        )
        break
      }
      case CommandType.Close: {
        if (this.tokens[0] === CommandType.Gripper) {
          store.commit(MUTATIONS.CLOSE_TOOL)
        } else {
          const fingers = this.getFingerIndexes()
          console.log(fingers)

          fingers.forEach((fingerIndex) => {
            store.commit(MUTATIONS.CLOSE_TOOL, { fingerIndex: fingerIndex })
          })
        }
        break
      }
      case CommandType.Open: {
        if (this.tokens[0] === CommandType.Gripper) {
          store.commit(MUTATIONS.OPEN_TOOL)
        } else {
          const fingers = this.getFingerIndexes()

          fingers.forEach((fingerIndex) => {
            store.commit(MUTATIONS.OPEN_TOOL, { fingerIndex: fingerIndex })
          })
        }
        break
      }
      default: {
        throw new Error('Invalid command type')
      }
    }
  }

  private extractAxisCoordinates() {
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
    const token = this.tokens.shift()
    return token === CommandType.All ? [0, 1, 2, 3, 4] : [Number(token) - 1]
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
  Gripper = 'GRIPPER',
}
