import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createChristmasTree } from '../src/katas/createChristmasTree.js'

void describe('pruebas para la creación de un árbol de navidad', () => {
  void it('árbol con 123 de decoración y altura 5', () => {
    const expected = `    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`
    const actual = createChristmasTree('123', 5)
    assert.equal(actual, expected)
  })
})
