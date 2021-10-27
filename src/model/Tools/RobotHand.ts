import Finger from '@/model/Tools/Finger'
import Tool from '@/model/Tools/Tool'
import { FingerType } from '@/model/Tools/FingerType'

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

  close(finger: FingerType) {
    this.parts[finger].close()
  }

  open(finger: FingerType) {
    this.parts[finger].open()
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
