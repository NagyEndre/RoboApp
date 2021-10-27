export default class Finger {
  constructor(private _isOpen = true) {}

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
