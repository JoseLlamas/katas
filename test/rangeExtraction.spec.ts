import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { rangeExtraction } from '../src/katas/index.js'

void describe('Sample Tests', () => {
  void it('Should pass sample tests', () => {
    assert.deepEqual(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), '-6,-3-1,3-5,7-11,14,15,17-20')
  })
})
