import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { rot13 } from './../src/katas/index.js'

void describe('Tests', function () {
  void it('Sample tests', function () {
    for (const [input, expected] of [[']b|[pikvgc:N', ']o|[cvxitp:A'], ['Test', 'Grfg']]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`)
    }
  })
})

void describe('Tests', function () {
  void it('Sample tests', function () {
    for (const [input, expected] of [[']b|[pikvgc:N', ']o|[cvxitp:A'], ['Test', 'Grfg']]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`)
    }
  })
})
