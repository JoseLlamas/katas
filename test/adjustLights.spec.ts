import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { adjustLights } from '../src/katas/adjustLights.js'

void describe('Pruebas para la función adjustLights', () => {
  void it('entrada [\'🟢\', \'🔴\', \'🟢\', \'🟢\', \'🟢\']', () => {
    const expected = 1
    const actual = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    assert.equal(actual, expected)
  })
  void it('extrada [\'🔴\', \'🔴\', \'🔴\']', () => {
    const expected = 1
    const actual = adjustLights(['🔴', '🔴', '🔴'])
    assert.equal(actual, expected)
  })
  void it('entrada [\'🟢\', \'🔴\', \'🟢\', \'🔴\', \'🟢\', \'🔴\']', () => {
    const expected = 0
    const actual = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢', '🔴'])
    assert.equal(actual, expected)
  })
  void it('entrada [\'🔴\', \'🔴\', \'🟢\', \'🟢\', \'🔴\']', () => {
    const expected = 2
    const actual = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
    assert.equal(actual, expected)
  })
})
