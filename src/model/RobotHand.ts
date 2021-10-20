import Finger from '@/model/Finger'
import Tool from '@/model/Tool'

export default class RobotHand extends Tool {
  constructor(
    thumb: Finger,
    index: Finger,
    middle: Finger,
    ring: Finger,
    little: Finger
  ) {
    super([thumb, index, middle, ring, little])
  }

  closeAll() {
    this.parts.forEach((finger) => {
      finger.close()
    })
  }

  openAll() {
    this.parts.forEach((finger) => {
      finger.open()
    })
  }
}
