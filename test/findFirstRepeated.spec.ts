import { it, describe } from 'node:test'
import assert from 'node:assert/strict'
import { findFirstRepeated } from '../src/katas/findFirstRepeated.js'

void describe('test para findFirstRepeated', () => {
  void it('se evalúa [2, 1, 3, 5, 3, 2], el resultado es 3', () => {
    const expected = 3
    const actual = findFirstRepeated([2, 1, 3, 5, 3, 2])
    assert.equal(actual, expected)
  })
  void it('se evalúa [1, 2, 3, 4], el resultado es -1', () => {
    const expected = -1
    const actual = findFirstRepeated([1, 2, 3, 4])
    assert.equal(actual, expected)
  })
  void it('se evalúa [5, 1, 5, 1], el resultado es 5', () => {
    const expected = 5
    const actual = findFirstRepeated([5, 1, 5, 1])
    assert.equal(actual, expected)
  })
})
