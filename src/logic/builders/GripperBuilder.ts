import { ToolBuilder } from './ToolBuilder'
import Gripper from '@/model/tools/Gripper'

export class GripperBuilder implements ToolBuilder<Gripper> {
  build() {
    return new Gripper()
  }
}
