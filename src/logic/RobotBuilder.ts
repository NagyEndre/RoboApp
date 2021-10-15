import Joint from '../model/Joint'
import Robot from '../model/Robot'
import RobotHand from '../model/RobotHand'
import Finger from '../model/Finger'

export function buildRobot(): Robot {
  const joints = [new Joint(1, 2, 3), new Joint(4, 5, 6), new Joint(7, 8, 9)]
  const robotHand = new RobotHand(
    new Finger(),
    new Finger(),
    new Finger(),
    new Finger(),
    new Finger()
  )
  return new Robot(joints, robotHand)
}
