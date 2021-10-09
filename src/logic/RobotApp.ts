import Joint from './Joint'
import Robot from './Robot'
import RobotHand from './RobotHand'
import Finger from './Finger'

const j1 = new Joint(2, 3, 4)
const j2 = new Joint(2, 3, 4)
const joints = [j1, j2]

const thumb = new Finger()
const indexFinger = new Finger()
const fingers = [thumb, indexFinger]

const robot = new Robot(joints, new RobotHand(fingers))

// setting joint coordinate
robot.joints[0].x = 3

// Activating finger of robot hand
robot.tool.parts[0].open()
robot.tool.parts[0].close()
