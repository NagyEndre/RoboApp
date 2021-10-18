import Finger from './Finger'
import Joint from './Joint'
import Tool from './Tool'

export default class Robot {
  constructor(public joints: Array<Joint>, public tool: Tool<Finger>) {}
}
