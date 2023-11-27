import { randomString } from './random-string'

describe('Utils: Random String', () => {
  it('should generate a random string with 6 characters', () => {
    expect(randomString(6)).toHaveLength(6)
  })
})
