import { describe, it } from 'node:test'
import assert from 'node:assert'
import { cyberReindeer } from '../src/katas/cyberReindeer.js'

void describe('test cyberReindeer', () => {
  void it('a', () => {
    const expected = [
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..'
    ]
    const result = cyberReindeer('S..|...|..', 10)
    assert.deepEqual(result, expected)
  })
  void it('b', () => {
    const expected = [
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.'
    ]
    const result = cyberReindeer('S.|.', 4)
    assert.deepEqual(result, expected)
  })
  void it('c', () => {
    const expected = [
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.'
    ]
    const actual = cyberReindeer('S.|.|.', 7)
    assert.deepEqual(actual, expected)
  })
  void it('d', () => {
    const expected = [
      'S.|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '..S..'
    ]
    const actual = cyberReindeer('S.|..', 6)
    assert.deepEqual(actual, expected)
  })
  void it('e', () => {
    const expected = [
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........'
    ]
    const actual = cyberReindeer('S.|.|.|......|.||.........', 8)
    assert.deepEqual(actual, expected)
  })
})
