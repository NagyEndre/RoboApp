export default class Finger {
  constructor(public isOpen: boolean = true) {}
  open() {
    this.isOpen = true
  }
  close() {
    this.isOpen = false
  }
}
