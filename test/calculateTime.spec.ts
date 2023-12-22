import { it, describe } from 'node:test'
import assert from 'node:assert/strict'
import { calculateTime } from '../src/katas/calculateTime.js'

void describe('tests para calculateTime', () => {
  void it('entrada es [\'00:10:00\', \'01:00:00\', \'03:30:00\']', () => {
    const expected = '-02:20:00'
    const actual = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    assert.equal(actual, expected)
  })
  void it('entrada es [\'02:00:00\', \'05:00:00\', \'00:30:00\']', () => {
    const actual = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    const expected = '00:30:00'
    assert.equal(actual, expected)
  })
  void it('entrada es [\'01:01:01\', \'03:59:59\', \'01:01:01\', \'00:57:58\']', () => {
    const actual = calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    const expected = '-00:00:01'
    assert.equal(actual, expected)
  })
})
