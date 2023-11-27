import { randomString } from './random-string'

test('random string should have 6 characters', () => {
  expect(randomString(6)).toHaveLength(6)
})
