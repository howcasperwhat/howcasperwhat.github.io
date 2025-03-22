export class Point {
  constructor(public x: number, public y: number) { }
  $move(x: number, y: number): Point {
    return new Point(this.x + x, this.y + y)
  }

  move(x: number, y: number): void {
    this.x += x
    this.y += y
  }
}
