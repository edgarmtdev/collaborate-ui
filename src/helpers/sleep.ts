export function sleep(timeout: number = 1000): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), timeout)
  })
}
