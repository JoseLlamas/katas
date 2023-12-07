import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { maxDistance } from '../src/katas/maxDistance.js'

void describe('pruebas para maxDistance (AdventJS)', () => {
  void it('se evalua ">>*<", debe dar 2', () => {
    const expected = 2
    const actual = maxDistance('">>*<"')
    assert.equal(actual, expected)
  })
  void it('se evalua <<<<<, debe dar 5', () => {
    const expected = 5
    const actual = maxDistance('<<<<<')
    assert.equal(actual, expected)
  })
  void it('se evalúa >***>, debe dar 5', () => {
    const expected = 5
    const actual = maxDistance('>***>')
    assert.equal(actual, expected)
  })
  void it('se evalúa **********, debe dar 10', () => {
    const exptected = 10
    const actual = maxDistance('**********')
    assert.equal(actual, exptected)
  })
  void it('se evalúa <<**>>, debe dar 2', () => {
    const expected = 2
    const actual = maxDistance('<<**>>')
    assert.equal(actual, expected)
  })
})
