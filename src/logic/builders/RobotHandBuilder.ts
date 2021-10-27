import RobotHand from '@/model/tools/RobotHand'
import Finger from '@/model/tools/Finger'
import { ToolBuilder } from './ToolBuilder'

export class RobotHandBuilder implements ToolBuilder<RobotHand> {
  build() {
    const fingers = []
    for (let i = 0; i < 5; i++) {
      fingers.push(new Finger())
    }
    return new RobotHand(fingers)
  }
}
