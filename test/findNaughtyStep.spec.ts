import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { findNaughtyStep } from '../src/katas/index.js'

void describe('prueba', () => {
  void it('es una cadena lo que se devuelve', () => {
    const expected = 'string'
    const result = typeof findNaughtyStep('', '')
    assert.equal(result, expected)
  })
})
