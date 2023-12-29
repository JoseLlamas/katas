import { describe, it } from 'node:test'
import assert from 'node:assert'
import { transformTree } from '../src/katas/transformTree.js'

void describe.only('test para transformTree', () => {
  void it('entrada []', { only: true }, () => {
    const expected = null
    const actual = transformTree([])
    assert.deepEqual(actual, expected)
  })
  void it('entrada [1,2,3]', { only: true }, () => {
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    }
    const actual = transformTree([1, 2, 3])
    assert.deepEqual(actual, expected)
  })
  void it('entrada [1, 2, 3, 4, 5]', { only: true }, () => {
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    }
    const actual = transformTree([1, 2, 3, 4, 5])
    assert.deepEqual(actual, expected)
  })
})
