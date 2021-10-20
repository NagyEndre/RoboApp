import Joint from '@/model/Joint'
import Tool from '@/model/Tool'

export default class Robot {
  constructor(public joints: Array<Joint>, public tool: Tool) {}
}
