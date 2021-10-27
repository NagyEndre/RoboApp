import Tool from '@/model/Tools/Tool'

export default class Gripper extends Tool<never> {
  constructor(private _isOpen = true) {
    super()
  }
  get isOpen() {
    return this._isOpen
  }
  open() {
    this._isOpen = true
  }
  close() {
    this._isOpen = false
  }
}
