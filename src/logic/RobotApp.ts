import Joint from '../model/Joint'
import Robot from '../model/Robot'
import RobotHand from '../model/RobotHand'
import Finger from '../model/Finger'

export function getRobot() {
  const joints = [new Joint(1, 2, 3), new Joint(4, 5, 6), new Joint(7, 8, 9)]

  const thumb = new Finger()
  const index = new Finger()
  const middle = new Finger()
  const ring = new Finger()
  const little = new Finger()

  const robot = new Robot(
    joints,
    new RobotHand(thumb, index, middle, ring, little)
  )
  return robot
}
