import Tool from './Tool'

export default class RobotHand<T> extends Tool<T> {
  constructor(fingers: Array<T>) {
    super(fingers)
  }
}
