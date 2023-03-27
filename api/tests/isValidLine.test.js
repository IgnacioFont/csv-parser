/* eslint-disable no-unused-expressions */

const { expect } = require('chai')

const isValidLine = require('./../utils/isValidLine')

describe('isValidLine', () => {
  it('should return true for a valid line', () => {
    const line = [
      'test.csv',
      'aoeuaoeu',
      '123',
      'abcdef1234567890abcdef1234567890'
    ]
    const result = isValidLine(line)
    expect(result).to.be.true
  })

  it('should return false for an invalid line with incorrect length', () => {
    const line = ['test.csv', 'aoeuoeau', '123']
    const result = isValidLine(line)
    expect(result).to.be.false
  })

  it('should return false for an invalid line with invalid file name', () => {
    const line = [
      'test',
      'aoeuaoeu',
      '123',
      'abcdef1234567890abcdef1234567890'
    ]
    const result = isValidLine(line)
    expect(result).to.be.false
  })

  it('should return false for an invalid line with non-string text value', () => {
    const line = [
      'test.csv',
      Symbol('test'),
      '123',
      'abcdef1234567890abcdef1234567890'
    ]
    const result = isValidLine(line)
    expect(result).to.be.false
  })

  it('should return false for an invalid line with non-numeric number value', () => {
    const line = [
      'test.csv',
      'aoeuaoeu',
      'ueoaueao',
      'abcdef1234567890abcdef1234567890'
    ]
    const result = isValidLine(line)
    expect(result).to.be.false
  })

  it('should return false for an invalid line with invalid hex value', () => {
    const line = ['test.csv', 'aoeuaoeu', '123', '1337']
    const result = isValidLine(line)
    expect(result).to.be.false
  })
})
