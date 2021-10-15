export default class Joint {
  constructor(public x: number, public y: number, public z: number) {}

  set(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}
