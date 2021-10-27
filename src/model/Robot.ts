import Joint from '@/model/Joint'
import Tool from '@/model/Tools/Tool'

export default class Robot<T extends Tool<any>> {
  constructor(public joints: Array<Joint>, public tool: T) {}
}
