import Tool from '@/model/Tool'

export default class Gripper extends Tool {
  constructor(private _isOpen = true) {
    super()
  }
  get isOpen() {
    return this._isOpen
  }
  open() {
    console.log('open gripper')
    this._isOpen = true
  }
  close() {
    console.log('close gripper')
    this._isOpen = false
  }
}
