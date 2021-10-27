import Finger from '@/model/tools/Finger'
import Tool from '@/model/tools/Tool'
import { FingerType } from '@/model/tools/FingerType'

export default class RobotHand extends Tool<Finger> {
  constructor(fingers: Finger[]) {
    if (fingers.length !== 5) {
      throw new Error('Hand must have 5 fingers.')
    } else {
      super(fingers)
    }
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
