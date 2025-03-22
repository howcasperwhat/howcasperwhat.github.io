export function checkInteger(value: number): boolean {
  return Number.isInteger(value)
}

export function checkRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}