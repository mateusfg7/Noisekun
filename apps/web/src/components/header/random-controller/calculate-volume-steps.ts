export function calculateVolumeSteps(
  currentVolume: number,
  targetVolume: number,
  steps: number
) {
  let volumeSteps: number[] = []
  for (let i = 1; i <= steps; i++) {
    // Exponential interpolation factor (ease-out)
    const factor = 1 - Math.pow(1 - i / steps, 2)
    const newVolume = currentVolume + (targetVolume - currentVolume) * factor
    volumeSteps.push(Math.min(newVolume, 1))
  }
  return volumeSteps
}
