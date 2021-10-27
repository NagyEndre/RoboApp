import RobotHand from '@/model/tools/RobotHand'
import Finger from '@/model/tools/Finger'
import { ToolBuilder } from './ToolBuilder'

export class RobotHandBuilder implements ToolBuilder<RobotHand> {
  build() {
    return new RobotHand(
      new Finger(),
      new Finger(),
      new Finger(),
      new Finger(),
      new Finger()
    )
  }
}
