import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { decode } from '../src/katas/index.js'

void describe('prueba', () => {
  void it('es una cadena lo que se devuelve', () => {
    const expected = 'string'
    const result = typeof decode('')
    assert.equal(result, expected)
  })
  void it('entrada (olleh) (dlrow)!', () => {
    const expected = 'hello world!'
    const result = decode('(olleh) (dlrow)!')
    assert.equal(result, expected)
  })
  void it('entrada sa(u(cla)atn)s', () => {
    const expected = 'santaclaus'
    const result = decode('sa(u(cla)atn)s')
    assert.equal(result, expected)
  })
})
