import Joint from '@/model/Joint'
import Robot from '@/model/Robot'
import RobotHand from '@/model/RobotHand'
import Finger from '@/model/Finger'
import Gripper from '@/model/Gripper'
import Tool from '@/model/Tool'

export default class RobotBuilder<T extends Tool<any>> {
  private joints: Joint[] | null = null
  private tool: T | null = null
  protected toolBuilder: ToolBuilder<T>

  constructor(builder: ToolBuilder<T>) {
    this.toolBuilder = builder
  }

  public build(): Robot<T> {
    //reset builder
    if (this.tool && this.joints) {
      return new Robot(this.joints, this.tool)
    } else {
      throw new Error('Can not build robot due to missing element(s)')
    }
  }

  public buildJoints(numOfJoints: number): RobotBuilder<T> {
    this.joints = []
    for (let i = 0; i < numOfJoints; i++) {
      const pos = i * 2
      this.joints.push(new Joint(pos, pos, pos))
    }
    return this
  }

  public buildTool() {
    this.tool = this.toolBuilder.build()
    return this
  }
  public changeToolBuilder(builder: ToolBuilder<T>) {
    this.toolBuilder = builder
    return this
  }
}

export interface ToolBuilder<T> {
  build(): T
}

export class GripperBuilder implements ToolBuilder<Gripper> {
  build() {
    return new Gripper()
  }
}

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
