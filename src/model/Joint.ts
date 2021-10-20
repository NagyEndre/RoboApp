export default class Joint {
  constructor(public X: number, public Y: number, public Z: number) {}

  set(x: number, y: number, z: number) {
    this.X = x
    this.Y = y
    this.Z = z
  }
}
