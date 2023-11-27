import { padZero } from './pad-zero'

test('should add a new 0 before number', () => {
  expect(padZero(2)).toBe('02')
})

test('should not add a new 0 before number', () => {
  expect(padZero(22)).toBe('22')
})
