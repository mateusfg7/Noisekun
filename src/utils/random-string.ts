export function randomString(length: number): string {
  return Math.random()
    .toString(36)
    .substring(2, length + 2)
}
