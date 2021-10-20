import Joint from '@/model/Joint'
import Robot from '@/model/Robot'
import RobotHand from '@/model/RobotHand'
import Finger from '@/model/Finger'
import Gripper from '@/model/Gripper'
import Tool from '@/model/Tool'

export function buildRobot(tool: Tool): Robot {
  const joints = [
    new Joint(2, 2, 2),
    new Joint(6, 6, 6),
    new Joint(4, 4, 4),
    new Joint(8, 8, 8),
    new Joint(10, 10, 10),
  ]

  return new Robot(joints, tool)
}

export function createRobotHand(): RobotHand {
  return new RobotHand(
    new Finger(),
    new Finger(),
    new Finger(),
    new Finger(),
    new Finger()
  )
}

export function createGripper() {
  return new Gripper()
}
