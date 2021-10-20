import Finger from '@/model/Finger'
import Tool from '@/model/Tool'

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

enum FingerType {
  Thumb,
  Index,
  Middle,
  Ring,
  Little,
}
