export default class Finger {
  constructor(private isOpen: boolean = true) {}
  open(): void {
    console.log('opening finger...')
    this.isOpen = true
  }
  close(): void {
    console.log('closing finger...')
    this.isOpen = false
  }
}
