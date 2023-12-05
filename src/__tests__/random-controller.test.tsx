import { calculateVolumeSteps } from '@/components/header/random-controller'

describe('calculateVolumeSteps tests', () => {
  test('calculates volume steps correctly for regular inputs', () => {
    const result = calculateVolumeSteps(0.3, 0.8, 5)
    const expected = [0.48, 0.62, 0.72, 0.78, 0.8]
    expect(result).toHaveLength(expected.length)
    result.forEach((val, index) => {
      expect(val).toBeCloseTo(expected[index])
    })
  })

  test('handles current and target volume being the same', () => {
    const result = calculateVolumeSteps(0.5, 0.5, 5)
    expect(result).toEqual([0.5, 0.5, 0.5, 0.5, 0.5])
  })

  test('handles zero steps', () => {
    const result = calculateVolumeSteps(0.3, 0.8, 0)
    expect(result).toEqual([])
  })

  test('handles negative steps', () => {
    const result = calculateVolumeSteps(0.3, 0.8, -5)
    expect(result).toEqual([])
  })

  test('handles a large number of steps', () => {
    const steps = 1000
    const result = calculateVolumeSteps(0.3, 0.8, steps)
    expect(result).toHaveLength(steps)
  })
})
