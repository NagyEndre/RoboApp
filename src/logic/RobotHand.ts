import Finger from './Finger'
import Tool from './Tool'

export default class RobotHand extends Tool<Finger> {
  constructor(
    thumb: Finger,
    index: Finger,
    middle: Finger,
    ring: Finger,
    little: Finger
  ) {
    super([thumb, index, middle, ring, little])
  }
}
