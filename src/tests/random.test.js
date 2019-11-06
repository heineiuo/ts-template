import random from '../random'

test('random', () => {
  expect(random(20).length).toBe(20)
})
