import { padZero } from './pad-zero'

describe('Utils: Pad Zero', () => {
  it('should add a new 0 before number', () => {
    expect(padZero(2)).toBe('02')
  })

  it('should not add a new 0 before number', () => {
    expect(padZero(22)).toBe('22')
  })
})
